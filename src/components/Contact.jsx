import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="px-10 flex md:flex-row flex-col gap-4 justify-center md:justify-around bg-black py-10 text-white items-center">
      <div className="font-bold text-xl md:text-3xl text-center md:w-1/4">
        Let’s connect! Reach out for collaboration or just to say hi.
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="font-bold">Pune, Maharashtra, India</div>
        <a href="mailto:dhruvpatil31.2003@gmail.com">
          <div>
            <span className="font-bold">Email:</span> dhruvpatil31.2003@gmail.com
          </div>
        </a>
        <div>
          <span className="font-bold">Phone:</span> +91 9403260978
        </div>
        <div className="flex gap-8 self-center md:self-start">
          <a href="https://linkedin.com/in/dhruv-patil-2003ja" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaLinkedin className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://github.com/dhruv310" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaGithub className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://leetcode.com/dhruvpatil31/" target="_blank" rel="noopener noreferrer" className="p-2">
            <SiLeetcode className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/dhruvpatij1at/" target="_blank" rel="noopener noreferrer" className="p-2 text-white font-semibold text-sm cursor-pointer">
            GFG
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
