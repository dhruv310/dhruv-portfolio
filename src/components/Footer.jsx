import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
  return (
    <div className="px-6 py-6 mt-2 bg-black text-white flex flex-col md:flex-row items-center md:justify-around gap-6">
      <div className="font-bold text-xl md:text-3xl text-center md:w-1/3">
        Let’s connect and build something amazing together!
      </div>
      <div className="flex flex-col gap-3 text-center md:text-left">
        <div className="font-bold">Pune, Maharashtra, India</div>
        <a href="mailto:dhruvpatil31.2003@gmail.com">
          <div>
            <span className="font-bold">Email:</span> dhruvpatil31.2003@gmail.com
          </div>
        </a>
        <div>
          <span className="font-bold">Phone:</span> +91 9403260978
        </div>
        <div className="flex gap-4 mt-3 justify-center md:justify-start">
          <a href="https://linkedin.com/in/dhruv-patil-2003ja" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 cursor-pointer text-white" />
          </a>
          <a href="https://github.com/dhruv310" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 cursor-pointer text-white" />
          </a>
          <a href="https://leetcode.com/dhruvpatil31" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-6 h-6 cursor-pointer text-white" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/dhruvpatij1at/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="w-6 h-6 cursor-pointer text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
