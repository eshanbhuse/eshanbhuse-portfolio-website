import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div
      className="w-11/12 max-w-2.5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 md:pt-0 lg:pt-0 "
      id="top"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hii! I'm Eshan Bhuse{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Java Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a passionate and dedicated Java Developer with expertise in back-end technologies.With
        a strong foundation in programming languages such as JavaScript, Java and frameworks like React and Springboot, I am committed to delivering high-quality optimized code.
      </motion.p>
      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2}}
          href="#contact"
          className="group px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2  transition-transform duration-300 hover:-translate-y-1"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2}}
          href="/eshanbhuse-resume.pdf"
          download
          className="group  px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white transition-transform duration-300 hover:-translate-y-1"
        >
          Download Resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4  " />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;


