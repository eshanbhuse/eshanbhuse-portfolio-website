'use client'
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" data-theme="black"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-darkTheme"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-white"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-white"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-white"
      >
        I offer a range of services to help businesses and individuals establish
        a strong online presence and achieve their digital goals. My services
        include:
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon,hoverIcon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            key={index} 
            className=" group border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black "
          >
            <Image src={hoveredIndex === index ? hoverIcon : icon} alt="" className="w-10" />
            <h3 className=" my-4 text-lg text-white group-hover:text-black">
              {title}
            </h3>
            <p className=" leading-5 text-sm text-white group-hover:text-black ">
              {description}
            </p>
            <a href={link} target="_blank" className="flex items-center gap-2 text-sm mt-5 text-white group-hover:text-black ">
              Read More{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
