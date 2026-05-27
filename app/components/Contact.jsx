import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0022519e-1337-4a26-b7b6-955dd5db5519");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my portfolio! I'm excited to connect with you. Whether you
        have questions, collaboration ideas, or just want to say hello, feel
        free to reach out.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={onSubmit}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            type="text"
            placeholder="Enter your name"
            required
            className="font-Ovo flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:border-gray-600 bg-transparent transition-all duration-300 focus:outline-none
focus:ring-1
focus:ring-black
focus:border-black dark:focus:border-white"
            name="name"
          />
          <motion.input
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            type="email"
            placeholder="Enter your email"
            required
            className="font-Ovo flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:border-gray-600 bg-transparent transition-all focus:outline-none
focus:border-black
focus:ring-1
focus:ring-black duration-300
 dark:focus:border-white"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="font-Ovo w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md dark:border-gray-600 bg-transparent transition-all focus:outline-none

focus:ring-1
focus:ring-black duration-300
focus:border-black dark:focus:border-white"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="font-Ovo py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-500 bg-black text-white
dark:bg-white dark:text-black "
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_bold} alt="" className="w-4" />{" "}
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
