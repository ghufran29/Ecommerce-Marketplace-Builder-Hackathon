"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LinkButton from "./ui/Linkbutton";
import { MdAddShoppingCart } from "react-icons/md";
import { client } from "@/sanity/lib/client";

interface Product {
  name: string;
  imagePath: string;
  price: number;
  id: string;
  slug: string;
}

const TopPicks = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products: Product[] = await client.fetch(`
          *[_type == "product" && isFeaturedProduct == true][0..3]{
            name,
            imagePath,
            price,
            id,
            "slug": slug.current
          }
        `);
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col items-center py-12">
        <h3 className="text-3xl text-center font-semibold">Loading...</h3>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="flex flex-col items-center py-12">
        <h3 className="text-3xl text-center font-semibold">No Top Picks Found</h3>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center py-12">
      <h3 className="text-3xl text-center font-semibold">Top Picks For You</h3>
      <p className="text-sm text-center text-gray-400 mt-3">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>
      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-6 lg:gap-10 mt-6 mb-10 lg:mt-20">
        {data.map((product) => (
          <a href={`/product/${product.slug}`} key={product.id}>
            <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              {/* Product Image */}
              <div className="w-full h-72 relative overflow-hidden">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-500"></div>

                {/* Quick View Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#FBEBB5] text-black px-4 py-2 text-sm rounded-md shadow-lg transition-opacity duration-300">
                  Quick View
                </button>

                {/* Cart Icon Button */}
                <button className="absolute top-4 right-4 bg-[#FBEBB5] text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdAddShoppingCart size={24} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#E2B646] transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-base font-bold text-gray-600 mt-2">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <LinkButton text="View More" href="/shop" />
    </section>
  );
};

export default TopPicks;
