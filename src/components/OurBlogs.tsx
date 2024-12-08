import Image from "next/image";
import LinkButton from "./ui/Linkbutton";
import { LuCalendar, LuClock5 } from "react-icons/lu";

const blogs = [
  { image: "/blog-1.png", title: "Going all-in with millennial design" },
  { image: "/blog-2.png", title: "The future of UI design" },
  { image: "/blog-3.png", title: "The importance of accessibility" },
];

const OurBlogs = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h3 className="text-3xl text-center font-semibold">Our Blogs</h3>
      <p className="text-sm text-center text-gray-400 mt-3">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-14 lg:mt-16">
        {blogs.map((blog, index) => (
          <div key={index} className="py-3 px-2 hover:shadow-lg rounded-md">
            <Image
              src={blog.image}
              width={300}
              height={300}
              alt={blog.title}
              className="w-full h-auto"
            />
            <div className="text-center space-y-3">
              <h4 className="text-xl font-medium mt-6">{blog.title}</h4>
              <LinkButton text="Read More" href="/blog" />
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <LuClock5 size={20} />
                <span>5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <LuCalendar size={20} />
                <span>
                  08<sup>th</sup> Dec 2024
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LinkButton text="View All Post" href="/blog" />
    </section>
  );
};

export default OurBlogs;
