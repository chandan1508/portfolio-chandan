import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-2 ">
      <p className="text-xl text-gray-300 pb-2">
        Chandan © {new Date().getFullYear()}
      </p>

      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
        <li>
          <a
            href="https://www.linkedin.com/in/chandan-42133a221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-xl md:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Chandan4459695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-xl md:text-2xl" />
          </a>
        </li>

        <li>
          <a
            href="mailto:chandankuma8001360@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail className="text-xl md:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/8287438732?text=Hi, How are you?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chandan-42133a221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl md:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chandan-42133a221/"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-[#1788ae] hover:text-gray-500"
          >
            <SiLeetcode className="text-xl md:text-2xl" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
