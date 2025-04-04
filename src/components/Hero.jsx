


import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../assets/images/prolife-pic.jpg';

const HeroSection = () => {
  return (
    <section id='home' className="flex flex-col justify-between h-screen pt-10 sm:pt-0 md:pb-30">
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 mx-auto max-w-screen-xl h-full w-full md:w-4/6 gap-2 md:gap-4">
        {/* Text content */}
        <div className="text-center md:text-left md:w-1/2 md:pr-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1788ae] mb-4">Chandan</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">MERN Stack Developer</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            I'm a passionate developer based in India, and I'm very dedicated to creating efficient web applications.
          </p>
          <a 
            href="/Chandan_Resume.pdf" 
            download="Chandan_Resume.pdf" 
            className="bg-[#1788ae] hover:bg-gray-500 text-white py-3 px-8 rounded-full font-medium transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Image container */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
            <img 
              src={profileImage} 
              alt="Chandan - MERN Stack Developer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social media links */}
        <div className="mt-8 md:mt-0 md:absolute md:right-8">
          <ul className="flex md:flex-col gap-4 md:gap-3">
            <li>
              <a href="https://www.linkedin.com/in/chandan-42133a221/" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <FaLinkedinIn className='text-xl md:text-2xl'/>
              </a>
            </li>
            <li>
              <a href="https://x.com/Chandan4459695" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <FaXTwitter className='text-xl md:text-2xl'/>
              </a>
            </li>
            <li>
              <a href="mailto:chandankuma8001360@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <MdOutlineEmail className='text-xl md:text-2xl'/>
              </a>
            </li>
            <li>
              <a href="https://wa.me/8287438732?text=Hi, How are you?" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <FaWhatsapp className='text-xl md:text-2xl'/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chandan-42133a221/" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <FaGithub className='text-xl md:text-2xl'/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chandan-42133a221/" target="_blank" rel="noopener noreferrer" className="text-[#1788ae] hover:text-gray-500">
                <SiLeetcode className='text-xl md:text-2xl'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
