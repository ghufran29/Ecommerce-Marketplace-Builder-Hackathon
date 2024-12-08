import Image from "next/image";
import LinkButton from "./ui/Linkbutton";

const Category = () => {
  return (
    <section className="bg-[#FAF4F4] pt-10 pb-20">
      <div className="container mx-auto flex flex-col justify-center gap-10 px-4 lg:flex-row lg:gap-0">
        {/* Left section */}
        <div className="flex flex-col lg:items-center lg:w-1/2">
          <Image
            className="ml-auto max-w-full h-auto"
            src="/square-side-table.png"
            alt="Square Side Table"
            width={600}
            height={600}
            priority
          />
          <div className="text-left">
            <h3 className="text-xl md:text-2xl mb-4 lg:text-3xl font-medium">Side Table</h3>
            <LinkButton text="View More" href="/shop" />
          </div>
        </div>
        {/* Right section */}
        <div className="flex flex-col lg:items-center lg:w-1/2">
          
          <Image
            className="ml-auto max-w-full h-auto"
            src="/sofa-three-seater.png"
            alt="Three-Seater Sofa"
            width={600}
            height={600}
            priority
          />
          <div className="text-left">
            <h3 className="text-xl md:text-2xl mb-4 mt-6 lg:text-3xl font-medium">Three-Seater Sofa</h3>
            <LinkButton text="View More" href="/shop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
