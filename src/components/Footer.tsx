import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/contact" },
];

const help = [
  { name: "Payment Options", path: "/" },
  { name: "Returns", path: "/" },
  { name: "Privacy Policies", path: "/" },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-6 px-12 lg:px-20">
      <div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-44">
        {/* address section */}
        <div className="flex items-center text-gray-400">
          <p className="">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        {/* links section */}
        <div className="">
          <h3 className="text-gray-400 text-sm font-medium mb-7">Links</h3>
          <ul className="space-y-7 text-sm font-medium">
            {links.map((link, index) => (
              <Link key={index} href={link.path} className="block hover:scale-105">
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        {/* help section */}
        <div className="">
          <h3 className="text-gray-400 text-sm font-medium mb-7">Help</h3>
          <ul className="space-y-7 text-sm font-medium">
            {help.map((link, index) => (
              <Link key={index} href={link.path} className="block hover:scale-105">
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center sm:max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="outline-none border-b border-black placeholder-gray-400 text-black text-sm py-2"
            />
            <button className="pt-3 sm:mt-0 sm:ml-4 font-medium tracking-wide text-black border-b border-black cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="max-w-8xl mx-auto px-4 mt-8 pt-8 border-t border-gray-300  text-sm">
        <p>2024 Modern Haven Furniture. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
