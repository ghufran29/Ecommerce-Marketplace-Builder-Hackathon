import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Quality from "@/components/ui/Quality";
import { client } from "@/sanity/lib/client";
import FilterbarAndProducts from "@/components/ui/FilterbarAndProducts";

export interface Product {
  name: string;
  imagePath: string;
  price: number;
  id: string;
  slug: string;
  category: string;
}

const page = async () => {
  const products: Product[] = await client.fetch(`
    *[_type == "product"]{
      name,
      imagePath,
      price,
      id,
      "slug": slug.current,
      category
    }
  `);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,243,.1)),url('/Rectangle-1.png')] bg-center bg-no-repeat bg-cover text-center min-h-[300px] flex items-center justify-center mb-8">
        <div className="container mx-auto text-center py-5">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/Logo.png" alt="Logo" width={80} height={80} />
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Shop</h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="text-black font-semibold text-base hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <IoIosArrowForward className="text-xl text-black font-medium" />
              <li className="text-black text-base">Shop</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterbarAndProducts categories={categories} products={products} />


    <Quality />
  </div>
  );
};

export default page;
