'use client'
import { IoIosArrowForward, IoMdOpen } from "react-icons/io";

import Image from "next/image"

const ProjectCard = ({name, imageUrl, description, link}) => {
  return (
    <div className="w-full md:w-x mx-auto ">
        <div className="p-card p-5 rounded-3xl space-y-3">
            <Image 
                src={imageUrl}
                alt=""
                width={600}
                height={400}
                className="rounded-3xl border border-5 border-gray-200"
            />

            <p className="px-2 text-xl md:text-3xl font-medium">{name}</p>
            <p className="px-2 text-gray-500">{description}</p>
            <a href={link}>
                <button className="flex items-center mx-2 mt-2 py-3 px-3 cursor-pointer w-32 hover:w-34 demo-btn duration-300 font-medium rounded-xl">Live Demo <span className="ml-auto ">
                {/* <IoMdOpen />  */}
                <IoIosArrowForward />
                </span>
            </button>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard