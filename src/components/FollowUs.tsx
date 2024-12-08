import React from "react";

const FollowUs = () => {
  return (
    <div className="bg-[linear-gradient(rgba(255,255,255,.7),rgba(255,255,243,.6)),url('/followpic.jpg')] bg-center bg-no-repeat bg-cover text-center min-h-[450px] flex items-center justify-center">
      <div className="text-center text-black">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Our Instagram</h2>
        <p className="mb-5 text-sm lg:text-base">Follow our store on instagram</p>
        <button className="px-14 py-3 text-sm font-medium bg-white text-black rounded-full border shadow-2xl shadow-black hover:border-black">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
