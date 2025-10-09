import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets, journeyData } from "@/assets/assets";

const MyJourney = ({ isDarkMode }) => {
  return (
    <motion.section
      id="my-journey"
      className="w-full px-[12%] py-16 relative scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Journey
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-5xl font-Ovo mb-16"
      >
        From Beginner to Developer
      </motion.h2>

      {/* Timeline container (now responsive) */}
      <div className="relative flex flex-col items-center">
        {/* Responsive center line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-[#eb3878]/70 hidden sm:block" />

        <div className="flex flex-col gap-16 w-full relative">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative w-full flex ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              {/* Dot on timeline */}
              <span
                className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#eb3878] rounded-full shadow-[0_0_15px_#eb3878]"
                style={{ top: "50%" }}
              ></span>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`w-[90%] sm:w-[45%] bg-transparent border border-gray-400 rounded-xl p-6 cursor-pointer duration-500 
                ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                } border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:bg-darkHover/50  dark:hover:shadow-white"`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={isDarkMode ? item.iconDark : item.icon}
                    alt=""
                    className="w-8 h-8"
                  />
                  <h3 className="text-gray-700 text-xl font-semibold dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">{item.timeframe}</p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MyJourney;
