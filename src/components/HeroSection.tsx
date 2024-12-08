import Image from "next/image";
import React from "react";
import LinkButton from "./ui/Linkbutton";

const HeroSection = () => {
  return (
    <div className="bg-primary flex items-center justify-center py-10 max-h-[780px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left Section */}
        <div className="lg:w-5/12 text-center lg:text-left space-y-6 lg:pl-40 pl-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium ">
            Rocket single
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            seater
          </h1>
          <LinkButton text="Shop Now" href="/shop" />
        </div>

        {/* Right Section */}
        <div className="lg:w-7/12 flex justify-center">
          <Image
            className="max-w-full h-auto lg:h-[820px]"
            src="/Rocket-single-seater.png"
            alt="Rocket single seater"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
