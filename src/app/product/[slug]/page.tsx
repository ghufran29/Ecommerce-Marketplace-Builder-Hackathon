import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStarHalf, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import LinkButton from "@/components/ui/Linkbutton";
import { client } from "@/sanity/lib/client";
import QuantitySelector from "@/components/ui/QuantityAndAddtoCart";
import { Product } from "@/app/shop/page";
import { MdAddShoppingCart } from "react-icons/md";

interface Params {
  params: {
    slug: string;
  };
}

interface Product1 {
  name: string;
  description: string;
  price: number;
  colors: string[];
  imagePath: string;
  reviews: number;
  stock_quantity: number;
  category: string;
  id: string;
  slug: string;
}

const page = async ({ params }: Params) => {
  const { slug } = params;

  const data: Product1 = await client.fetch(
    `
      *[_type == "product" && slug.current == $slug][0]{
        name,
        description,
        price,
        colors,
        imagePath,
        reviews,
        category,
        id,
        "slug": slug.current
      }
    `,
    { slug }
  );

  const data2: Product[] = await client.fetch(`
    *[_type == "product" && category == "${data.category}"][0..3]{
name,
imagePath,
price,
id,
"slug": slug.current
}
  `);

  return (
    <div className="px-6 lg:px-24 mt-10">
      {/* Breadcrumb */}
      <ol className="flex flex-wrap items-center py-4 lg:py-10 space-x-2">
        <li className="hover:underline">
          <Link href="/" className="text-gray-400 text-xs lg:text-base">
            Home
          </Link>
        </li>
        <IoIosArrowForward className="text-sm lg:text-xl text-black font-medium" />
        <li className="hover:underline">
          <Link href="/shop" className="text-gray-400 text-xs lg:text-base">
            Shop
          </Link>
        </li>
        <IoIosArrowForward className="text-sm lg:text-xl text-black font-medium" />
        <li className="font-medium text-xs lg:text-base">{data.name}</li>
      </ol>

      <div>
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Section - Product Image */}
          <div>
            <div className="flex-1 w-full h-[320px] lg:h-[450px] lg:w-[550px] rounded-lg border border-gray-200">
              <Image
                src={data.imagePath}
                alt={data.name}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Right Section - Product Info */}
          <div>
            <h1 className="text-2xl lg:text-4xl font-medium mb-2">
              {data.name}
            </h1>
            <p className="text-lg font-medium lg:text-2xl text-gray-500 mb-4">
              Rs. {data.price.toLocaleString()}
            </p>

            {/* Reviews */}
            <div className="flex items-center text-[#FFDA5B] gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaRegStarHalf />
              <p className="text-xs lg:text-sm text-gray-400">
                {data.reviews} customer reviews
              </p>
            </div>

            {/* Description */}
            <p className="text-xs lg:text-sm font-medium text-gray-500 mb-3">
              Description
            </p>
            <p className="text-sm lg:text-base mb-4">{data.description}</p>

            {/* Colors */}
            <p className="text-xs lg:text-sm font-medium text-gray-500 mb-3">
              Color
            </p>
            <div className="flex items-center gap-2 lg:gap-3 text-sm text-center mb-8">
              {data.colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: color }}
                  className="px-3 py-3 lg:px-4 lg:py-4 rounded-full cursor-pointer border hover:border-black"
                ></div>
              ))}
            </div>

            <QuantitySelector
              product={{
                id: data.id,
                name: data.name,
                price: data.price,
                image: data.imagePath,
              }}
            />

            {/* SKU Details */}
            <div className="border-t border-gray-300 mt-8 pt-8 text-sm space-y-3">
              <div className="text-gray-400">
                <span>Category :</span>
                <span> {data.category}</span>
              </div>
              <div className="text-gray-400 flex items-center space-x-3">
                <span>Share :</span>
                <span className="text-xl flex gap-2 text-black">
                  <FaFacebook />
                  <FaLinkedin />
                  <AiFillTwitterCircle />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <div className="max-w-8xl mx-auto px-4 mt-14 pt-8 border-t border-gray-300 text-sm"></div>
        <div>
          <h3 className="text-3xl text-center font-semibold mt-5">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-6 lg:gap-10 mt-6 mb-10 lg:mt-20">
            {data2.map((product1, index) => (
              <Link href={`/product/${product1.slug}`} key={index}>
                <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                  {/* Product Image */}
                  <div className="w-full h-72 relative overflow-hidden">
                    <Image
                      src={product1.imagePath}
                      alt={product1.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-500"></div>

                    {/* Quick View Button */}
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#FBEBB5] text-black px-4 py-2 text-sm rounded-md shadow-lg transition-opacity duration-300">
                      Quick View
                    </button>

                    {/* Cart Icon Button */}
                    <button className="absolute top-4 right-4 bg-[#FBEBB5] text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MdAddShoppingCart size={24} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#E2B646] transition-colors duration-300">
                      {product1.name}
                    </h4>
                    <p className="text-base font-bold text-gray-600 mt-2">
                      Rs. {product1.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <LinkButton text="View More" href="/shop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
