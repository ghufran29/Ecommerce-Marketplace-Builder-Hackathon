import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
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
            Contact
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
              <li className="text-black">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-8 px-4 lg:px-32">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Get In Touch With Us
        </h2>
        <p className="text-sm text-center text-gray-400 mt-3">
          For More Information About Our Product & Services, Feel Free To Drop
          Us <br /> An Email. Our Staff Is Always Here To Help You Out.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 mt-10 mb-10 lg:mt-20">
          {/* Details Section */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-xl sm:text-2xl w-6 h-6" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Address</h3>
                <p className="text-sm font-medium">
                  236 5th SE Avenue, New York <br /> NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-xl sm:text-2xl w-6 h-6" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Phone</h3>
                <p className="text-sm font-medium">
                  Mobile: &#43;&#40;84&#41; 546-6789
                  <br /> Hotline: &#43;&#40;84&#41; 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaClock className="text-xl sm:text-2xl w-6 h-6" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Working Time
                </h3>
                <p className="text-sm font-medium">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                  21:00
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="text-base font-medium mb-3">Your Name</h4>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 placeholder-gray-400 text-black text-sm px-6 py-5 rounded-lg"
              />
            </div>

            <div>
              <h4 className="text-base font-medium mb-3">Email Address</h4>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 placeholder-gray-400 text-black text-sm px-6 py-5 rounded-lg"
              />
            </div>

            <div>
              <h4 className="text-base font-medium mb-3">Subject</h4>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-gray-300 placeholder-gray-400 text-black text-sm px-6 py-5 rounded-lg"
              />
            </div>

            <div>
              <h4 className="text-base font-medium mb-3">Message</h4>
              <textarea
                placeholder="Enter Your Message"
                className="w-full border border-gray-300 placeholder-gray-400 text-black text-sm px-6 py-5 rounded-lg h-24"
              ></textarea>
            </div>

            <button className="w-48 py-3 rounded-xl text-sm font-semibold border border-black">
              Submit
            </button>
          </div>
        </div>
      </div>

      <Quality />
    </div>
  );
};

export default page;
