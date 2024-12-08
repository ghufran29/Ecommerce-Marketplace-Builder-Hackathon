import React from "react";

const Quality = () => {
  return (
    <section className="bg-[#FAF4F4] px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:gap-28">
        <div>
          <h2 className="text-3xl font-semibold mb-1">Free Delivery</h2>
          <p className="text-lg text-gray-400">
            For all oders over $50, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-1">90 Days Return</h2>
          <p className="text-lg text-gray-400">
            If goods have problems, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-1">Secure Payment</h2>
          <p className="text-lg text-gray-400">
            100% secure payment, consectetur <br /> adipim scing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
