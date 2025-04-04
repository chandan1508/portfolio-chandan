



// // import React from "react";
// // import LatestWorks from "./components/LatestWorks";
// // import ContactSection from "./components/ContactSection";
// // import Skills from "./components/Skills";
// // import Hero from "./components/Hero";
// // import Footer from "./components/Footer";
// // import Header from "./components/Header";
// // import ParticlesBackground from "./ParticlesBackground";
// // import "./app.css";

// // const App = () => {
// //   return (
// //     <div className="relative">
// //       <ParticlesBackground />
// //       <Header />
// //       <Hero />
// //       <Skills />
// //       <LatestWorks />
// //       <ContactSection />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import LatestWorks from "./components/LatestWorks";
// import ContactSection from "./components/ContactSection";
// import Skills from "./components/Skills";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ParticlesBackground from "./ParticlesBackground";
// import "./app.css";

// const App = () => {
//   return (
//     <div className="relative">
//       <div className="hidden md:block"> {/* Hide on small screens */}
//         <ParticlesBackground />
//       </div>
//       <Header />
//       <Hero id="home"/>
//       <Skills id="skills "/>
//       <LatestWorks id="work" />
//       <ContactSection id="contact"/>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import LatestWorks from "./components/LatestWorks";
import ContactSection from "./components/ContactSection";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParticlesBackground from "./ParticlesBackground";
import "./App.css";

const App = () => {
  return (
    <div className="relative">
      <div className="hidden md:block">
        <ParticlesBackground />
      </div>
      <Header />
      <Hero id="home" />
      <Skills id="skills" />
      <LatestWorks id="work" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default App;


