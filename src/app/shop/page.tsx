import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { PiCirclesFourFill } from "react-icons/pi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Quality from "@/components/ui/Quality";

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
    title: "Grain coffe table",
    price: "Rs. 15,000.00",
  },
  {
    image: "/product-5.png",
    title: "Kent coffe table",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-6.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 225,000.00",
  },
  {
    image: "/product-7.png",
    title: "Round coffee table",
    price: "Rs. 251,000.00",
  },
  {
    image: "/product-8.png",
    title: "Reclaimed teak coffe table",
    price: "Rs. 25,200.00",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,243,.1)),url('/Rectangle-1.png')] bg-center bg-no-repeat bg-cover text-center min-h-[300px] flex items-center justify-center mb-8">
        <div className="container mx-auto text-center py-5">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/Logo.png" alt="Logo" width={80} height={80} />
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ">
            Shop
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="text-black font-semibold text-base hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <IoIosArrowForward className="text-xl text-black font-medium" />
              <li className="text-black text-base">Shop</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#FAF4F4] px-5 py-4 sm:px-10 sm:py-6 lg:px-20 lg:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Section */}
          <div className="flex flex-wrap gap-3 sm:gap-5 items-center">
            <VscSettings className="text-lg w-6 h-6" />
            <span className="text-base sm:text-lg font-medium">Filter</span>
            <PiCirclesFourFill className="text-lg w-6 h-6" />
            <TbLayoutDistributeHorizontal className="text-lg w-6 h-6" />
            <span className="hidden sm:block border-r border-gray-400 h-6"></span>
            <p className="text-sm sm:text-base">Showing 1-16 of 32 results</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm sm:text-lg">Show</span>
            <span className="bg-white px-3 py-1 sm:py-2 text-gray-400 text-sm sm:text-base rounded-md shadow-sm">
              16
            </span>
            <span className="text-sm sm:text-lg">Sort by</span>
            <span className="bg-white px-3 py-1 sm:py-2 pr-8 sm:pr-10 text-gray-400 text-sm sm:text-base rounded-md shadow-sm">
              Default
            </span>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-4 lg:gap-20 mt-6 mb-10 lg:mt-20">
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
            <h4 className="text-sm font-medium mt-5">{product.title}</h4>
            <p className="text-lg font-semibold mt-2">{product.price}</p>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex items-center gap-7 justify-center my-12">
        <button className="bg-[#FBEBB5] px-6 py-3 text-black rounded-md font-medium text-lg">
          1
        </button>
        <button className="bg-[#FFF9E5] px-6 py-3 text-black rounded-md font-medium text-lg">
          2
        </button>
        <button className="bg-[#FFF9E5] px-6 py-3 text-black rounded-md font-medium text-lg">
          3
        </button>
        <button className="bg-[#FFF9E5] px-6 py-3 text-black rounded-md font-medium text-lg">
          Next
        </button>
      </div>

      <Quality />
    </div>
  );
};

export default page;
