import React from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="relative inline-block text-black text-xl font-medium px-1 pt-2 transition-all duration-300 group"
    >
      <span className="relative z-10 group-hover:text-white transition-all duration-300">
        {text}
      </span>
      <span className="absolute  -mb-1 left-0 bottom-0 w-full h-[2px] bg-black rounded-md group-hover:h-full group-hover:bottom-0 group-hover:bg-black group-hover:px-4 group-hover:py-2 transition-all duration-300"></span>
    </a>
  );
};

export default LinkButton;
