import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStarHalf, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import LinkButton from "@/components/ui/Linkbutton";

const products = [
  {
    image: "/product-1.png",
    title: "Trenton modular sofa",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-2.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-3.png",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-4.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
];

const page = () => {
  return (
    <div className="px-6 lg:px-24 mt-10">
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
        <li className="font-medium text-xs lg:text-base">Asgaard sofa</li>
      </ol>

      <div>
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-28">
          {/* Left Images */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 lg:gap-4">
              {["/p1.png", "/p2.png", "/p3.png", "/p4.png"].map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  width={90}
                  height={60}
                  className="bg-[#FFF9E5] rounded-md h-[60px] w-[60px] lg:h-[80px] lg:w-[80px]"
                />
              ))}
            </div>
            <div>
              <Image
                src="/Asgaard-sofa.png"
                alt="Asgaard Sofa"
                width={500}
                height={500}
                className="bg-[#FFF9E5] rounded-md h-[300px] w-full lg:h-[600px] lg:w-[700px]"
              />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-2xl lg:text-4xl font-medium mb-2">
              Asgaard Sofa
            </h1>
            <p className="text-lg lg:text-2xl text-gray-400 mb-4">
              Rs. 250,000.00
            </p>
            <div className="flex items-center text-[#FFDA5B] gap-2 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalf />
              <p className="text-xs lg:text-sm text-gray-300">
                5 customer Review
              </p>
            </div>
            <p className="text-sm lg:text-base mb-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            {/* Size Selector */}
            <p className="text-xs lg:text-sm font-medium text-gray-400 mb-3">
              Size
            </p>
            <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-center mb-5">
              {["L", "XL", "XS"].map((size) => (
                <div
                  key={size}
                  className="bg-[#FAF4F4] px-3 py-2 lg:px-4 lg:py-3 rounded-md cursor-pointer"
                >
                  {size}
                </div>
              ))}
            </div>
            {/* Color Selector */}
            <p className="text-xs lg:text-sm font-medium text-gray-400 mb-3">
              Color
            </p>
            <div className="flex items-center gap-2 lg:gap-3 text-sm text-center mb-8">
              {["#816DFA", "#1B1212", "#CDBA7B"].map((color, idx) => (
                <div
                  key={idx}
                  className={`bg-[${color}] px-3 py-3 lg:px-4 lg:py-4 rounded-full cursor-pointer`}
                ></div>
              ))}
            </div>
            {/* Add to Cart */}
            <div className="flex gap-3 items-center mb-8">
              <div className="text-center rounded-md border border-gray-400 w-20 lg:w-32 py-2 lg:py-4">
                &#45; 1 &#43;
              </div>
              <button className="w-36 lg:w-48 py-2 lg:py-4 rounded-lg text-sm font-semibold border border-black hover:bg-black hover:text-white">
                Add To Cart
              </button>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-sm space-y-3">
              <div className="text-gray-400">
                <span>SKU :</span>
                <span> SS001</span>
              </div>
              <div className="text-gray-400">
                <span>Category :</span>
                <span> Sofas</span>
              </div>
              <div className="text-gray-400">
                <span>Tags :</span>
                <span> Sofa, Chair, home, Shop</span>
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
        {/* Description */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-row items-center justify-center gap-4 lg:gap-14 text-center text-sm lg:text-2xl">
            <h3>Description</h3>
            <h3 className="text-gray-400 hover:text-black cursor-pointer">
              Additional Information
            </h3>
            <h3 className="text-gray-400 hover:text-black cursor-pointer">
              Reviews &#91;5&#93;
            </h3>
          </div>
          <div className="text-gray-400 mt-4 lg:mt-10 px-4 lg:px-44">
            <p>
              Embodying the raw, wayward spirit of rock n roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-2 lg:mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center mt-6">
            {["/p-d-1.png", "/p-d-2.png"].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Product ${idx + 1}`}
                width={600}
                height={440}
              />
            ))}
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 mt-14 pt-8 border-t border-gray-300 text-sm"></div>
        {/* Related Products */}
        <div>
          <h3 className="text-3xl text-center font-semibold mt-5">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 mt-6 mb-10 lg:mt-16">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full h-72 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-medium mt-6">{product.title}</h4>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
              </div>
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
