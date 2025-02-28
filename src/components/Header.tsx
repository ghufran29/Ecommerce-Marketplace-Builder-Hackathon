"use client";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/contact" },
];

const icons = [
  { icon: <TbUserExclamation />, path: "/" },
  { icon: <FiSearch />, path: "/shop" },
  { icon: <IoMdHeartEmpty />, path: "/" },
  { icon: <AiOutlineShoppingCart />, path: "/cart" },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <nav className="bg-primary py-3 px-4 lg:px-16">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/Logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-16 text-base font-medium">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="hover:text-[#b9982b] transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 lg:space-x-10 text-2xl">
          {icons.map((icon, index) => (
            <Link
              href={icon.path}
              key={index}
              className="relative hover:text-[#b9982b] transition cursor-pointer"
            >
              {icon.icon}
              {index === 3 &&
                cartItemCount > 0 && ( // Only add the badge to the cart icon
                  <span className="absolute top-[-10px] right-[-8px] bg-[#b9982b] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
            </Link>
          ))}
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showMobileMenu && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 rounded-lg px-6 py-4">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-gray-700 text-lg font-medium hover:text-[#b9982b] transition cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
