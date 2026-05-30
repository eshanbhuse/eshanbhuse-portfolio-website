import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        {/* <Image src={assets.header_bg_color} alt="" className="w-full" /> */}
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between z-50  gap-4 md:gap-6 lg:gap-8 ${
          isScroll
            ? "bg-white bg-opacity-40 backdrop-blur-lg shadow-md "
            : ""
        }`}
      >
        {/* <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className=" cursor-pointer mr-14 w-28"
          />
        </a> */}
        <a href="#top" className="mr-14">
  <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-black font-Ovo whitespace-nowrap">
    Eshan Bhuse
  </h1>
</a>
        <ul
          className={`hidden md:flex items-center gap-4 md:px-4 md:text-sm lg:gap-8  px-12 py-3  ${
    isScroll
      ? ""
      : "bg-white bg-opacity-40"
  } `}
        >
          <li>
            <a className="font-Ovo" href="#top">
            Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#my-journey">
              My Journey
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#certificates">
              Certificates
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button> */}
          

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-7 py-2 border border-gray-500 rounded-full ml-4 font-Ovo bg-[#ebebeb] hover:scale-105 transition duration-500 ease-in-out "
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>
          <button className="md:hidden block ml-3 " onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#ebebeb] transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#my-journey">
              My Journey
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#certificates">
              Certificates
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
