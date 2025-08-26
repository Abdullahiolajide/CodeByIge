'use client'
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [light, setLight] = useState(true)
  const toggleDarkMode = () => {
    setLight(prev=> !prev)
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="p-4 flex justify-between max-w-6xl lg:rounded-xl bg-[var(--background)] borde boder-gray-300 mx-auto w-full top-0 z-100 ">
      <p>
        <span className="text-highlight font-bold text-[20px] md:text[28px] lg:text-[32px]">{"</>"}</span> <span className="text-[20px] md:text[28px] lg:text-[32px] font-bold">{" CodeByIge"}</span>
      </p>
      <ul className="md:flex items-center space-x-10 hidden ">
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
      </ul>
      <div className="flex">
        <button 
        onClick={toggleDarkMode} 
        className="px-3 py-1 rounded cursor-pointer text-2xl "
      >
        {light ? <MdOutlineDarkMode />
        :  <MdOutlineLightMode />}
      </button>
      {/* <div className="flex items-center text-2xl cursor-pointer"><IoMenu /></div> */}
      </div>
      

    </nav>
  )
}

export default Navbar
