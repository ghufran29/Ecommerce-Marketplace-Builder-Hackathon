import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbTrashFilled } from "react-icons/tb";
import Quality from "@/components/ui/Quality";

const page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,243,.1)),url('/Rectangle-1.png')] bg-center bg-no-repeat bg-cover text-center min-h-[300px] flex items-center justify-center mb-8">
        <div className="container mx-auto text-center py-5 px-4">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/Logo.png" alt="Logo" width={80} height={80} />
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Cart
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-black font-semibold hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <IoIosArrowForward className="text-base sm:text-xl text-black font-medium" />
              <li className="text-black">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* cart section */}
      <div className="py-12 px-36 flex flex-col-1 lg:flex-clols-2 gap-10">
        <div className="flex flex-col">
          <div className="bg-[#FFF9E5] flex px-32 py-4 rounded-md">
            <h4 className="font-semibold">Product</h4>
            <h4 className="font-semibold ml-24">Price</h4>
            <h4 className="font-semibold ml-32">Quantity</h4>
            <h4 className="font-semibold ml-10">Subtotal</h4>
          </div>
          {/* cart product */}
          <div className="flex items-center mt-12">
            <div className="">
              <Image
                src="/Asgaard-sofa.png"
                alt="Rectangle"
                width={90}
                height={60}
                className="bg-[#FBEBB5] rounded-md h-23 w-34"
              />
            </div>
            <h4 className="ml-10 font-medium text-gray-400">Asgaard Sofa</h4>
            <h4 className="ml-12 font-medium text-gray-400">Rs. 25,000.00</h4>
            <h4 className="ml-20 font-medium rounded-sm border border-gray-400 px-3 py-1">1</h4>
            <h4 className="ml-16 font-medium">Rs. 25,000.00</h4>
            <TbTrashFilled className="ml-10 text-2xl text-[#FBEBB5] w-5 h-5" />
          </div>
        </div>
        {/* cart total */}
        <div className="bg-[#FFF9E5] px-20 pt-4 pb-20 rounded-md text-center">
            <h3 className="text-2xl font-semibold mb-10">Cart Total</h3>
            <div className="flex gap-12 mb-5">
                <h5 className="font-semibold">Subtotal</h5>
                <p className="font-medium text-gray-400">Rs. 25,000.00</p>
            </div>
            <div className="flex gap-12">
                <h5 className="font-semibold">Total</h5>
                <p className="text-[#B88E2F] text-xl font-medium">Rs. 25,000.00</p>
            </div>
            <button className="w-48 py-3 mt-8 rounded-xl text-sm font-semibold border border-black">
              Check Out
            </button>
          </div>
      </div>

      <Quality />
    </div>
  );
};

export default page;
