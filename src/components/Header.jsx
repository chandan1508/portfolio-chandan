
// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="z-10 flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
//       {/* Logo */}
//       <div className="text-2xl text-[#1788ae] font-bold">Chandan</div>

//       {/* Navigation - Desktop */}
//       <nav className="hidden md:flex gap-8">
//         <a href="#home" className="text-[#1788ae] text-xl hover:text-gray-500">
//           Home
//         </a>
//         <a href="#skills" className="text-[#1788ae] text-xl hover:text-gray-500">
//           Skills
//         </a>
//         <a href="#work" className="text-[#1788ae] text-xl hover:text-gray-500">
//           Work
//         </a>
//         <a href="#contact" className="text-[#1788ae] text-xl hover:text-gray-500">
//           Contact
//         </a>
//       </nav>

//       {/* Mobile menu button */}
//       <button
//         className="md:hidden text-gray-800 text-3xl"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FiX /> : <FiMenu />}
//       </button>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg md:hidden flex flex-col space-y-4">
//           <a
//             href="#home"
//             className="text-[#1788ae] text-xl hover:text-gray-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#skills"
//             className="text-[#1788ae] text-xl hover:text-gray-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Skills
//           </a>
//           <a
//             href="#work"
//             className="text-[#1788ae] text-xl hover:text-gray-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Work
//           </a>
//           <a
//             href="#contact"
//             className="text-[#1788ae] text-xl hover:text-gray-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50 fixed top-0 left-0 right-0 bg-white shadow-sm h-16 flex items-center ">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-screen-xl">
        {/* Logo */}
        <div className="text-2xl text-[#1788ae] font-bold">Chandan</div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-[#1788ae] text-lg hover:text-gray-500 transition-colors">
            Home
          </a>
          <a href="#skills" className="text-[#1788ae] text-lg hover:text-gray-500 transition-colors">
            Skills
          </a>
          <a href="#work" className="text-[#1788ae] text-lg hover:text-gray-500 transition-colors">
            Work
          </a>
          <a href="#contact" className="text-[#1788ae] text-lg hover:text-gray-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1788ae] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation - placed outside the main header container */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4">
          <a
            href="#home"
            className="text-[#1788ae] text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-[#1788ae] text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#work"
            className="text-[#1788ae] text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[#1788ae] text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

