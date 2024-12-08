import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary relative overflow-hidden flex items-center justify-center py-10 mb-10 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10 space-y-10 lg:space-y-0 py-10">
          {/* Left Section (Text) */}
          <div className="w-full lg:w-5/12 text-right lg:text-left space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Rocket single
              <br />
              seater
            </h1>

            <Link href="/" className="">
              Shop Now
              <span className="border-b border-dashed border-black"></span>
            </Link>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
            <Image
              className="w-full h-auto max-w-lg lg:max-w-2xl mx-auto lg:mx-0"
              src="/Rocket-single-seater.png"
              alt="single seater"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero