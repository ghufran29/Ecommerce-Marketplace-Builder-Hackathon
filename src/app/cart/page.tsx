"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbTrashFilled } from "react-icons/tb";
import Quality from "@/components/ui/Quality";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { removeFromCart, updateQuantity } from "@/Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <ToastContainer />
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
      <div className="py-6 px-4 lg:py-12 lg:px-36 flex flex-col justify-center lg:flex-row gap-10">
        
        {/* cart items heading */}
        <div className="flex flex-col">
          <div className="bg-[#FFF9E5] flex gap-6 lg:gap-[84px] px-4 py-4 lg:px-32 rounded-md text-sm lg:text-base font-semibold">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>
          {/* cart items */}
          <div className="mt-6 lg:mt-12 gap-5 lg:gap-10 text-sm lg:text-base">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-8 mb-4">
                <div className="hidden lg:block">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={60}
                    className="rounded-md h-23 w-34"
                    unoptimized
                  />
                </div>
                <h4 className="lg:ml-0 lg:max-w-28 font-medium">{item.name}</h4>
                <h4 className="lg:ml-1 font-medium">
                  Rs. {item.price.toLocaleString()}
                </h4>
                <div className="flex items-center gap-1 lg:gap-2 lg:ml-6 font-medium rounded-sm border border-gray-500 px-2 py-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    &#8722;
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    &#43;
                  </button>
                </div>
                <h4 className="lg:ml-12 font-medium">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </h4>
                <TbTrashFilled
                  className="lg:ml-8 text-xl lg:text-2xl text-[#B88E31] w-7 h-7 cursor-pointer hover:text-[#c23232]"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* cart total */}
        <div className="bg-[#FFF9E5] px-4 py-6 lg:px-16 lg:pt-4 lg:pb-20 rounded-md text-center">
          <h3 className="text-lg lg:text-2xl font-semibold mb-6 lg:mb-10">
            Cart Total
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-5">
            <h5 className="font-semibold">Subtotal</h5>
            <p className="font-medium text-gray-400">
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
            <h5 className="font-semibold">Total</h5>
            <p className="text-[#B88E2F] text-lg lg:text-xl font-medium">
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </p>
          </div>
          <button className="w-full lg:w-48 py-3 mt-8 rounded-xl text-sm font-semibold border border-black hover:bg-black hover:text-white">
            Check Out
          </button>
        </div>
      </div>

      <Quality />
    </div>
  );
};

export default Page;
