// import React from "react";
// import { motion } from "motion/react";
// import Image from "next/image";
// import { certificatesData } from "@/assets/assets";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { useState } from "react";

// const Certificates = ({ isDarkMode }) => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % certificatesData.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
//   };

//   return (
//     <motion.section
//       id="certificates"
//       className="w-full px-[12%] py-16 relative scroll-mt-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Heading */}
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Certificates
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-center text-5xl font-Ovo mb-16"
//       >
//         My Achievements
//       </motion.h2>

//       {/* Carousel Container */}
//       <div className="relative flex flex-col items-center justify-center">
//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 sm:left-10 text-[#eb3878] text-3xl hover:scale-110 transition-transform"
//         >
//           ‹
//         </button>

//         {/* Card */}
//         <motion.div
//           key={current}
//           initial={{ scale: 1, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           whileHover={{ scale: 1.05, y: -6 }}
//           transition={{ duration: 0.4, ease: "linear" }}
//           className="w-[90%] sm:w-[420px] border-[0.5px]  border-gray-400  rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  dark:border-white dark:hover:bg-darkHover/50   text-center bg-transparent "
//         >
//           <div className="flex justify-center mb-4">
//             <Image
//               src={certificatesData[current].image}
//               alt={certificatesData[current].title}
//               width={320}
//               height={220}
//               className="rounded-md border border-gray-600 dark:border-white/30 shadow-md"
//             />
//           </div>
//           <h3 className="text-xl font-semibold dark:text-white">
//             {certificatesData[current].title}
//           </h3>
//           <p className="text-gray-400 mt-2">
//             {certificatesData[current].issuer}
//           </p>
//           <p className="text-sm text-gray-400 mb-4">
//             {certificatesData[current].date}
//           </p>

//           <a
//             href={certificatesData[current].link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block mt-2 py-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
//           >
//             View Certificate{" "}
//             <FaExternalLinkAlt className="inline ml-2 text-sm" />
//           </a>
//         </motion.div>

//         <button
//           onClick={nextSlide}
//           className="absolute right-0 sm:right-10 text-[#eb3878] text-3xl hover:scale-110 transition-transform"
//         >
//           ›
//         </button>

//         <div className="flex mt-6 gap-2">
//           {certificatesData.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//                 current === index
//                   ? "bg-[#eb3878]"
//                   : "bg-gray-500 hover:bg-[#eb3878]/60"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Certificates;

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { certificatesData } from "@/assets/assets";
import { FaExternalLinkAlt } from "react-icons/fa";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css"; 

const Certificates = ({ isDarkMode }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      // Destroy previous instance if any
      if (splideRef.current.splide) {
        splideRef.current.splide.destroy();
      }

      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        gap: "1rem",
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      });

      splide.mount({ AutoScroll });
      splideRef.current.splide = splide;
    }
  }, []);

  return (
    <motion.section
      id="certificates"
      className="w-full px-[8%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Certificates
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-4xl sm:text-5xl font-Ovo mb-12 sm:mb-16"
      >
        My Achievements
      </motion.h2>

      {/* Splide Carousel */}
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {certificatesData.map((cert, index) => (
              <li className="splide__slide" key={index}>
                <motion.div
                  whileHover={{ scale: 1, y: -6 }}
                  transition={{ duration: 0.1 }}
                  className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover/50 dark:border-white/40 text-center bg-transparent shadow-md duration-500"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={320}
                      height={220}
                      className="rounded-md border border-gray-600 dark:border-white/30 shadow-md"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-400 mb-4">{cert.date}</p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 py-2 bg-[#eb3878] text-white rounded-full mx-auto hover:bg-[#c92c67] duration-500 w-3/4 sm:w-2/3"
                  >
                    View Certificate{" "}
                    <FaExternalLinkAlt className="inline ml-2 text-sm" />
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
