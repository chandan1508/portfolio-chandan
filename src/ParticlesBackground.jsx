// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log("Particles Initialized", engine);
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#ffff", // Background color
//         },
//         particles: {
//           number: {
//             value: 80,
//             density: { enable: true, value_area: 800 },
//           },
//           color: { value: "#E5E4E2" },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.5,
//             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#E5E4E2",
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 3,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: true, mode: "grab" },
//             onclick: { enable: true, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 140, line_linked: { opacity: 1 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;


// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log("Particles Initialized", engine);
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#ffffff", // White background
//         },
//         particles: {
//           number: {
//             value: 60, // Slightly reduced for a cleaner look
//             density: { enable: true, value_area: 800 },
//           },
//           color: { value: "#d3d3d3" }, // Light gray particles
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.3, // More subtle effect
//             anim: { enable: false },
//           },
//           size: {
//             value: 2.5,
//             random: true,
//             anim: { enable: false },
//           },
//           line_linked: {
//             enable: true,
//             distance: 120, // Slightly closer links
//             color: "#e0e0e0", // Softer line color
//             opacity: 0.3,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1.5, // Slower movement
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: true, mode: "grab" },
//             onclick: { enable: true, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 140, line_linked: { opacity: 0.7 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;



// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log("Particles Initialized", engine);
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#ffffff", // White background
//         },
//         particles: {
//           number: {
//             value: 60, // Balanced density
//             density: { enable: true, value_area: 800 },
//           },
//           color: { value: "#4a4a4a" }, // Dark gray particles
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.5, // Slightly more visible
//             anim: { enable: false },
//           },
//           size: {
//             value: 3, // Slightly bigger
//             random: true,
//             anim: { enable: false },
//           },
//           line_linked: {
//             enable: true,
//             distance: 120,
//             color: "#6a6a6a", // Slightly lighter gray for contrast
//             opacity: 0.5,
//             width: 1.2,
//           },
//           move: {
//             enable: true,
//             speed: 1.8, // Balanced movement
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: true, mode: "grab" },
//             onclick: { enable: true, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 140, line_linked: { opacity: 0.8 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Initialized", engine);
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#ffffff", // White background
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // Keeps particles in the background
        },
        particles: {
          number: {
            value: 60, // Balanced density
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#4a4a4a" }, // Dark gray particles
          shape: { type: "circle" },
          opacity: {
            value: 0.5, // Slightly more visible
            anim: { enable: false },
          },
          size: {
            value: 3, // Slightly bigger
            random: true,
            anim: { enable: false },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#6a6a6a", // Slightly lighter gray for contrast
            opacity: 0.5,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.8, // Balanced movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.8 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;


