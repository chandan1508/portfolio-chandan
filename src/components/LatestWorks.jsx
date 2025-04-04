import React from "react";

const LatestWorks = () => {
  const projects = [
    {
      title: "BookStore",
      subtitle: "(Online Book buying app)",
      description:
        "Developed a dynamic web application for browsing, searching, and purchasing books. Users can easily navigate through different sections of the site, explore book listings, and complete purchases.",
      image: "./src/assets/images/book.png",
      link: "https://rainbow-smakager-dbcfc1.netlify.app/",
      color: "#459bd5",
      tags: [
        "#react.js",
        "#express.js",
        "#node.js",
        "#mongoDB",
        "#mongoose",
        "#css",
        "#javascript",
        "#figma",
      ],
      order: "left",
    },
    {
      title: "Foody Panda",
      subtitle: "(Food Ordering App)",
      description:
        "Designed and developed a web application for browsing and ordering food, emphasizing a user-friendly and responsive interface. Included a powerful search feature to help users easily find and filter food items. Ensured a smooth and consistent experience across all devices, from desktops to mobile phones.",
      image: "./src/assets/images/food.png",
      link: "https://lively-scone-ed697a.netlify.app/",
      color: "#ffe578",
      tags: ["#react.js", "#Tailwind CSS", "#javascript", "#figma"],
      order: "right",
    },
    {
      title: "Cryptoplace",
      subtitle: "(Crypto Price tracking app)",
      description:
        "Developed a user-friendly web application to monitor real-time cryptocurrency prices. The app features a modern, responsive interface and allows users to search and track various cryptocurrencies with ease. Integrated live data to ensure accurate and up-to-date pricing information.",
      image: "./src/assets/images/crypto.png",
      link: "https://endearing-raindrop-0b3f37.netlify.app/",
      color: "#fc815c",
      tags: [
        "#react.js",
        "#Tailwind CSS",
        "#javascript",
        "#figma",
        "CoinGecko API",
      ],
      order: "left",
    },
  ];

  return (
    <section
      id="work"
      className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16"
    >
      <h2 className="text-3xl sm:text-[40px] bg-[#ffff] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Latest Works
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row gap-4 ${
            index === 0 ? "mt-8 sm:mt-20" : "mt-12 sm:mt-20"
          } relative`}
        >
          {/* Horizontal line (left side) - only for left-aligned projects */}
          {project.order === "left" && (
            <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          )}

          {/* Horizontal line (right side) - only for right-aligned projects */}
          {project.order === "right" && (
            <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          )}

          {/* Central dot */}
          <div
            className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#ffff] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
            style={{ borderColor: project.color }}
          ></div>

          {/* Project image (left side for left-aligned, right side for right-aligned) */}
          <a
            href={project.link}
            className={`flex w-full relative justify-center sm:justify-start ${
              project.order === "right" ? "order-1 sm:order-2" : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex flex-col items-center relative group ${
                project.order === "right" ? "sm:ml-auto" : "sm:mr-auto"
              } sm:hover:scale-105 ease-in-out duration-200`}
            >
              <img
                className="max-w-[400px] w-full border-2 border-[#1788ae] rounded-2xl relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={project.image}
                alt={project.title}
              />
              <span
                className={`flex group-hover:-top-14 ease-jump duration-200 ${
                  project.color === "#ffe578" ? "text-black" : "text-white"
                } sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}
                style={{ backgroundColor: project.color }}
              >
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          {/* Project details (right side for left-aligned, left side for right-aligned) */}
          <div
            className={`w-full pl-10 pr-10 ${
              project.order === "right" ? "order-2 sm:order-1" : ""
            }`}
          >
            <h3
              className="font-bold text-2xl md:text-4xl"
              style={{ color: project.color }}
            >
              {project.title}
            </h3>
            <span
              className="text-base md:text-lg"
              style={{ color: project.color }}
            >
              {project.subtitle}
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <li
                  key={tagIndex}
                  className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Vertical line */}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LatestWorks;
