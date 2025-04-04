import React from 'react';

const skillItems = [
  {
    imgSrc: './src/assets/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: './src/assets/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: './src/assets/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: './src/assets/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: './src/assets/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: './src/assets/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: './src/assets/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: './src/assets/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section id='skills' className=" py-12 px-4 sm:px-6 lg:px-8">
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