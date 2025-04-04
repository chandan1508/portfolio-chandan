import React from 'react';
import figma from '../assets/images/figma.svg'
import css3 from '../assets/images/css3.svg'
import javascript from '../assets/images/javascript.svg'
import nodejs from '../assets/images/nodejs.svg'
import expressjs from '../assets/images/expressjs.svg'
import mongodb from '../assets/images/mongodb.svg'
import react from '../assets/images/react.svg'
import tailwindcss from '../assets/images/tailwindcss.svg'
const skillItems = [
  {
    imgSrc: figma,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: css3,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: javascript,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: nodejs,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: expressjs,
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: mongodb,
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: react,
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: tailwindcss,
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section id='skills' className=" py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-[40px] bg-[#ffff] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae]  ">
          Essential Tools I use
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillItems.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img 
                  src={skill.imgSrc} 
                  alt={skill.label} 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {skill.label}
              </h3>
              <p className="text-sm text-gray-500 text-center">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;