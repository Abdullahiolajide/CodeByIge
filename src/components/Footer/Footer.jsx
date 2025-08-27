import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mb-30">
        <div className="w-xs md:w-2xl mx-auto border-t border-gray-300"></div>
        {/* <hr className="border"/> */}
        <p className="text-center text-sm text-gray-400 mt-10">Copyright © 2025 Ige Abdullahi.</p>
        <div className="flex justify-around w-50 text-gray-600 mt-5 mx-auto text-xl">
            <a href="https://x.com/TechTitan_1" className="hover:text-gray-900"><FaXTwitter /></a>
            <a href="https://www.instagram.com/abdullahi_ige/" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@codebyige" className="hover:text-gray-900"><FaTiktok /></a>
            <a href="https://github.com/Abdullahiolajide" className="hover:text-gray-900"><LuGithub /></a>
            <a href="mailto:techtitan060@gmail.com" className="hover:text-gray-900"><MdOutlineMail /></a>
        </div>
    </footer>
  )
}

export default Footer