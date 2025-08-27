'use client'
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { motion } from "motion/react"

const Navbar = () => {
  const [light, setLight] = useState(true)
  const toggleDarkMode = () => {
    setLight(prev=> !prev)
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav 
      className="p-4 flex justify-between max-w-6xl lg:rounded-xl bg-[var(--background)] borde boder-gray-300 mx-auto w-full top-0 z-100 "
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-highlight font-bold text-[20px] md:text[28px] lg:text-[32px]">{"</>"}</span> 
        <span className="text-[20px] md:text[28px] lg:text-[32px] font-bold">{" CodeByIge"}</span>
      </motion.p>

      {/* Nav links */}
      <motion.ul 
        className="md:flex items-center space-x-10 hidden "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {["About", "Skills", "Portfolio", "Testimonials"].map((item, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Dark mode button */}
      <motion.div 
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button 
          onClick={toggleDarkMode} 
          className="px-3 py-1 rounded cursor-pointer text-2xl "
        >
          {light ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
