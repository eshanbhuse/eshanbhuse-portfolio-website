import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about" data-theme="black"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-darkTheme"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-white"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none "
        >
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2.5xl font-Ovo text-white">
            Hello! I'm Eshan Bhuse, a Java Developer, pursued my B.Tech Degree
            from Sardar Patel Institute of Technology. With a strong foundation
            in both front-end and back-end technologies, I specialize in
            creating backend logic for web applications that deliver seamless
            user experiences. My expertise includes proficiency in programming
            languages such as JavaScript and Java, as well as frameworks like
            React and Springboot. I also use Docker for containerization of
            appications, using Microservices for better code optimization and
            Redis for caching. When I'm not coding, I enjoy exploring new
            technologies, contributing to open-source projects, and continuously
            enhancing my skills to stay at the forefront of the ever-evolving
            tech landscape.
          </p>

          {/* <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="group border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white "
              >
                <Image
                  src={iconDark}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="text-black my-4 font-semibold text-white group-hover:text-black">
                  {title}
                </h3>
                <p className="text-black text-sm text-white group-hover:text-black" >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6  font-Ovo text-white"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li                
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border  border-white rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                whileInView={{ scale: 1.1 }}
                key={index}
              >
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-white bg-black text-white overflow-hidden rounded-lg ">
              <div className="relative py-10 text-center">
                <h3 className="text-2xl font-bold">4+</h3>
                <p className="text-sm text-white mt-1">Years Of Learning</p>

                <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-white/50"></div>
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white/50"></div>
              </div>

              <div className="relative py-10 text-center">
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm text-white mt-1">Projects Built</p>

                <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-white/50"></div>
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-white/50"></div>
              </div>

              <div className="relative py-10 text-center">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-sm text-white mt-1">Technologies</p>

                <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-white/50"></div>
              </div>

              <div className="py-10 text-center">
                <h3 className="text-2xl font-bold">300+</h3>
                <p className="text-sm text-white mt-1">DSA Problems</p>
              </div>
            </div>

            {/* Tech Stack */}
            {/* <div className="mt-10">
    <h4 className="text-white text-xl font-semibold mb-5">
      Tech Stack
    </h4>

    <div className="flex flex-wrap gap-3">
      {[
        "Java",
        "Spring Boot",
        "Microservices",
        "Docker",
        "Redis",
        "MySQL",
        "React",
        "JavaScript",
        "Git",
        "AWS"
      ].map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div> */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10"
            >
              <h4 className="text-white text-xl font-semibold mb-5">
                Tech Stack
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-white">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo ">Java</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Spring Boot</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Microservices</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Docker</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Redis</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">MySQL</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">React.js</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Tailwind</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Git & GitHub</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">AWS</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">REST APIs</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span className="font-Ovo">Linux</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
