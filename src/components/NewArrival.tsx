import Image from "next/image";

const NewArrival = () => {
  return (
    <section className="bg-[#FFF9E5] flex items-center max-h-[600px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center text-center justify-between">
        {/* Left Section */}
        <div className="lg:w-8/12 flex justify-center">
          <Image
            className="max-w-full h-auto"
            src="/Asgaard-sofa.png"
            alt="Rocket single seater"
            width={1100}
            height={1100}
            priority
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-5/12 text-center">
        <h5 className="text-lg lg:text-xl font-semibold mb-2">New Arrivals</h5>
          <h1 className="text-2xl md:text-3xl mb-7 lg:text-5xl font-extrabold ">
            Asgaard Sofa
          </h1>
          <button className="px-12 py-3 text-sm mb-6 font-medium border-2 border-black">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
