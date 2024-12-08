import Image from "next/image";
import LinkButton from "./ui/Linkbutton";

const products = [
  {
    image: "/product-1.png",
    title: "Trenton modular sofa",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-2.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-3.png",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-4.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
];

const TopPicks = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h3 className="text-3xl text-center font-semibold">Top Picks For You</h3>
      <p className="text-sm text-center text-gray-400 mt-3">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 mt-6 mb-10 lg:mt-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-72 relative">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h4 className="text-sm font-medium mt-6">{product.title}</h4>
            <p className="text-lg font-semibold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
      <LinkButton text="View More" href="/shop" />
    </section>
  );
};

export default TopPicks;
