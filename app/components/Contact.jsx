import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Contact = () => {
  const captchaRef = useRef(null);
  const router = useRouter();
  // const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!captchaToken) {
      toast.error("Please complete the captcha before submitting the form.");
      return;
    }
    // setResult("Sending....");
    const formData = new FormData(event.target);
    formData.delete("g-recaptcha-response");
    formData.delete("h-captcha-response");

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    formData.append("h-captcha-response", captchaToken);

    const name = formData.get("name");
    const subject = `${name} submitted the form from your Portfolio website`;
    formData.append("subject", subject);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    
    if (data.success) {
      // setResult("Form Submitted Successfully");
      event.target.reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
      router.push("/thank-you");
      // setTimeout(() => {
      //   setResult("");
      // }, 3000);
    } else {
      event.target.reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
      console.log("Error", data);
      // setResult(data.message);
      toast.error("Failed to send message.Please try again later.", {
        style: {
          background: "#fff",
          color: "#000",
          border: "1px solid #000",
        },
      }); // setTimeout(() => {
      //   setResult("");
      // }, 3000);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      data-theme="white"
      className="w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
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
        transition={{ duration: 0.1, ease: "easeOut" }}
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
            className="font-Ovo flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  bg-transparent transition-all duration-300 focus:outline-none
focus:ring-1
focus:ring-black
focus:border-black"
            name="name"
          />
          <motion.input
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            type="email"
            placeholder="Enter your email"
            required
            className="font-Ovo flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  bg-transparent transition-all focus:outline-none
focus:border-black
focus:ring-1
focus:ring-black duration-300"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.16 }}
          rows="6"
          placeholder="Enter your message"
          required
          className=" resize-none font-Ovo w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  bg-transparent transition-all focus:outline-none

focus:ring-1
focus:ring-black duration-300
focus:border-black"
          name="message"
        ></motion.textarea>
        <div className="flex justify-center my-6">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_ACCESS_KEY}
            reCaptchaCompat={false}
            onVerify={(token) => setCaptchaToken(token)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="font-Outfit py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-200 bg-black text-white"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
        </motion.button>

        {/* <p className="mt-4">{result}</p> */}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
