"use client";
import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";

export interface Product {
  name: string;
  imagePath: string;
  price: number;
  id: string;
  slug: string;
  category: string;
}

interface FilterBarProps {
  categories: string[];
  products: Product[];
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    const updatedProducts = category
      ? products.filter((product) => product.category === category)
      : products;
    setFilteredProducts(updatedProducts);
  };

  const handleShowChange = (count: number) => {
    setProductsPerPage(count);
    setCurrentPage(1);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);

    if (order === "default") {
      const updatedProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;
      setFilteredProducts(updatedProducts);
    } else {
      const sortedProducts = [...filteredProducts];

      if (order === "price-high-to-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (order === "price-low-to-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
      }

      setFilteredProducts(sortedProducts);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      {/* Filter Section */}
      <div className="bg-[#FAF4F4] px-5 py-4 sm:px-10 sm:py-6 lg:px-20 lg:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-[#E2B646] transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <VscSettings className="text-lg w-5 h-5 " />
                <span className="text-sm sm:text-lg font-medium">
                  Filter / Search
                </span>
              </div>
              {isSearchOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-72 z-10 border border-gray-200">
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Search Products
                  </label>
                  <input
                    type="text"
                    id="search"
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E2B646] focus:border-transparent"
                    placeholder="Search by product name..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  {/* Dropdown for Categories */}
                  <div className="mt-4">
                    <label
                      htmlFor="categories"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="categories"
                      className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E2B646] focus:border-transparent"
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <span className="hidden sm:block border-r-2 border-gray-500 h-6"></span>
            <p className="text-sm sm:text-lg">
              Showing{" "}
              {Math.min(
                (currentPage - 1) * productsPerPage + 1,
                filteredProducts.length
              )}
              -
              {Math.min(currentPage * productsPerPage, filteredProducts.length)}{" "}
              of {filteredProducts.length} results
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm sm:text-lg">Show</span>
            <select
              className="bg-white px-3 py-1 sm:py-2 text-gray-700 text-sm sm:text-base rounded-md shadow-sm focus:ring-2 focus:ring-[#E2B646] focus:border-transparent"
              value={productsPerPage}
              onChange={(e) => handleShowChange(Number(e.target.value))}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>

            <span className="text-sm sm:text-lg">Sort by</span>
            <select
              className="bg-white px-3 py-1 sm:py-2 pr-8 sm:pr-10 max-w-32 text-gray-700 text-sm sm:text-base rounded-md shadow-sm focus:ring-2 focus:ring-[#E2B646] focus:border-transparent"
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="price-low-to-high">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-6 lg:gap-10 mt-6 mb-10 lg:mt-20">
        {displayedProducts.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.id}>
            <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="w-full h-72 relative overflow-hidden">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                {/* Cart Icon Button */}
                <button className="absolute top-4 right-4 bg-[#FBEBB5] text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdAddShoppingCart size={24} />
                </button>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#E2B646] transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-base font-bold text-gray-600 mt-2">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-4 lg:gap-7 justify-center my-12">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-black rounded-md font-medium text-lg ${
              currentPage === index + 1 ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="bg-[#FFF9E5] px-6 py-3 text-black rounded-md font-medium text-lg"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
