import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from "../assets/images/prolife-pic.jpg";

const HeroSection = () => {
  return (
   
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-10  sm:py-5"
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:pb-20 px-4 mx-auto max-w-screen-xl w-full md:w-4/5 h-full">
        {/* Text content - takes full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1788ae] mb-3 md:mb-4">
            Chandan
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-3 md:mb-4">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            I'm a passionate developer based in India, and I'm very dedicated to
            creating efficient web applications.
          </p>
          <a
            href="/Chandan_Resume.pdf"
            download="Chandan_Resume.pdf"
            className="inline-block bg-[#1788ae] hover:bg-gray-500 text-white py-2 md:py-3 px-6 md:px-8 rounded-full font-medium transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Image container - centered on mobile, right-aligned on desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
            <img
              src={profileImage}
              alt="Chandan - MERN Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social media links - fixed to bottom on mobile, right side on desktop */}
        <div className="mt-8 md:mt-0 md:absolute md:right-8">
          <ul className="flex md:flex-col gap-4 md:gap-3 justify-center">
            <li>
              <a
                href="https://www.linkedin.com/in/chandan-42133a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Chandan4459695"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="mailto:chandankuma8001360@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <MdOutlineEmail className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8287438732?text=Hi, How are you?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chandan-42133a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <FaGithub className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chandan-42133a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1788ae] hover:text-gray-500"
              >
                <SiLeetcode className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

