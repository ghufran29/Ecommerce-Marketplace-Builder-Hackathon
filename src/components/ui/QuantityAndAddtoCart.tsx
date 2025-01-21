"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const QuantitySelector = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
      })
    );
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
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
    <>
    <ToastContainer />
    <div className="flex gap-3 items-center mb-8">
      {/* Quantity Selector */}
      <div className="text-center rounded-md border border-gray-400 w-20 lg:w-32 py-2 lg:py-4 flex items-center justify-between px-2 lg:px-4">
        <button
          onClick={handleDecrease}
          className="text-gray-600 hover:text-black font-semibold"
        >
          &#45;
        </button>
        <span className="text-black font-semibold">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-gray-600 hover:text-black font-semibold"
        >
          &#43;
        </button>
      </div>
      {/* Add to Cart Button */}
      <button
        className="w-36 lg:w-48 py-2 lg:py-4 rounded-lg text-sm font-semibold border border-black hover:bg-black hover:text-white"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
    </>
  );
};

export default QuantitySelector;
