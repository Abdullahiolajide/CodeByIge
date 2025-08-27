'use client'
import Image from "next/image";
import { DiWebplatform } from "react-icons/di";
import { LiaStoreSolid } from "react-icons/lia";
import { AiFillThunderbolt } from "react-icons/ai"
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import { useForm, ValidationError } from '@formspree/react';
import { FaCheckCircle } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export default function Home(){
  const contactSection = useRef(null)
  const [state, handleSubmit] = useForm("xblaljyg");
  const [isVisible, setIsVisible] = useState(false)
  const goToContact = ()=>{
    contactSection.current.scrollIntoView({ behavior: 'smooth'})
  }
  useEffect(() => {
  if (state.succeeded) {
    setIsVisible(true);
    document.querySelector("form")?.reset();

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }
}, [state.succeeded]);



  const projects = [
    {
      name: 'Ordorra',
      imageUrl:'/images/ordorra.png',
      description:'WhatsApp Storefront builder for online vendors looking to automate sales',
      link:'https://ordorra.vercel.app'
    },
    {
      name: 'Talenxify',
      imageUrl:'/images/talenxify.png',
      description:'A waitlist landing page for an start up launching a product',
      link:'https://talenxify.vercel.app'
    },
    {
      name: 'ByIge',
      imageUrl:'/images/byige.png',
      description:'A blog website for people to share exciting stories to read',
      link:'https://byige.vercel.app'
    },
    {
      name: 'LCP',
      imageUrl:'/images/lcp.png',
      description:'Health Care website for patients to book appointments with Professionals',
      link:'https://abdullahiolajide.github.io/lcp/'
    },
     {
      name: 'Quizzed',
      imageUrl:'/images/quizflow.png',
      description:'Quiz Application for users to take random quizzes for fun',
      link:'https://quizzed-eta.vercel.app/'
    },
     {
      name: 'Fidealz',
      imageUrl:'/images/fidealz.png',
      description:'Personal Freelance to showcase works and attract clients',
      link:'https://abdullahiolajide.github.io/fidealz'
    },
  ]
  return(
    <div>

      {/* success contact modal  */}
      <AnimatePresence initial={false}>
                {isVisible ? (
                  <div className="fixed z-100 top-0 bg-black/30 w-full h-[100vh] flex items-center justify-center backdrop-blur-xs">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        // style={box}
                        key="box"
                    >
                    <div className="w-sm bg-white  rounded-xl space-y-2 flex flex-col items-center py-4 px-3">
                      <div className="text-5xl text-highlight"><FaCheckCircle /></div>
                      <p className="text-xl font-medium">Success</p>
                      <p className="text-gray-500 text-center">
                        Thank you for reaching out! Your message has been sent successfully. I’ll get back to you as soon as possible.

                      </p>
                      {/* <button className="btn-bg text-white px-3 py-2 rounded-md cursor-pointer">Okay</button> */}
                        <motion.button
                          // style={button}
                          className="btn-bg text-white px-3 py-2 rounded-md cursor-pointer"
                          onClick={() => setIsVisible(false)}
                          whileTap={{ y: 1 }}
                          >
                          okay
                        </motion.button>

                    </div>
      </motion.div>
                  </div>
                ) : null}
            </AnimatePresence>
      {/* success contact modal  */}

      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
  <div className="md:mx-4 max-w-6xl relative lg:mx-auto px-4 mt-8 md:mt-25 lg:mt-35 flex items-center flex-1 flex-col lg:flex-row">

    {/* LEFT SIDE CONTENT */}
    <motion.div 
      className="mt-10 rtop lg:mt-0 space-y-6"
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
      }}
    >
      <motion.div 
        className="text-highlight border rounded-4xl px-2 w-fit mx-auto lg:mx-0 align-1 mb-5"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
      >
        Welcome
      </motion.div>

      <motion.div 
        className="text-3xl md:text-5xl lg:text-6xl text-1 text-center lg:text-left  font-bold mt-5"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <span>Hey, </span>I'm Ige <span>Abdullahi</span> <br />
        <span className="text-highlight">Web<span className="sh">site</span> developer</span>
      </motion.div>

      <motion.p 
        className="text-gray-400 max-w-xl mt-3 text-sm md:text-base text-center text-1 lg:text-left"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5 }}
      >
        Creating innovative solutions and captivating designs.  
        University student by day, visionary creator by night.
      </motion.p>

      <motion.div 
        className="mt-3 space-x-2 md:space-x-4 mx-auto lg:mx-0 w-fit align-1"
        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.5 }}
      >
        <button 
          className="btn-bg text-white py-3 px-4 cursor-pointer rounded-lg md:text-lg" 
          onClick={goToContact}
        >
          Hire me
        </button>
        <button className="py-3 px-4 cursor-pointer rounded-lg md:text-lg">View my work</button>
      </motion.div>
    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <motion.div 
      className="lg:absolute position-1 lg:right-0 mt-12 lg:mt-0 bg-green-900"
      variants={{
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7 } }
      }}
    >
      <div className="relative w-full flex items-center justify-center">
        <motion.div 
          className="relative w-[250px] md:w-sm h-60 md:h-80 me-10 mx-auto btn-bg"
          variants={{ hidden: { opacity: 0, rotate: 5 }, visible: { opacity: 1, rotate: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src={'/images/avatar-removed.png'}
            width={650}
            height={450}
            alt=""
            className="absolute mx-6 bottom-0 z-10"
          />
        </motion.div>
        <motion.div 
          className="w-[230px] md:w-sm flex right-0 h-50 md:h-80 me-10 ml-auto border border-red-300 border-4 mt-14 me-22 absolute top-0"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>
    </motion.div>
  </div>
</motion.div>


      <motion.section 
        className="max-w-6xl mx-auto px-6 mt-30 md:mt-40 lg:mt-50 nm mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-highlight border rounded-4xl px-2 w-fit mx-auto lg:mx-0 mb-4">Services</div>
        <div className="md:flex mt-10 md:mt-10">
          <div className=" w-full ">
            <div className="text-3xl md:text-4xl lg:text-5xl ">
              Why Hire Me For Your <br /> Next <span className="text-highlight">Project?</span>
            </div>
            <p className="text-gray-400 max-w-xl mt-3 text-sm md:text-base lg:text-left">
              Creating innovative solutions and captivating designs.
                University student by day, visionary creator by night.
            </p>
            <button className="btn-bg text-white py-3 px-4 cursor-pointer rounded-lg md:text-md mt-4"  onClick={goToContact}>Hire me</button>
          </div>
          <div className="w-full right-0 flex items-center mt-10">
            <div className="flex flex-col space-y-15 md:pl-10">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-highlight text-2xl"><DiWebplatform /></p>
                <p className="md:text-lg font-medium"> Web development</p>
                <p className="text-sm md:text-base">I build Business websites, portfolios, landing pages</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-highlight text-2xl"><LiaStoreSolid /></p>
                <p className="md:text-lg font-medium">Online Stores</p>
                <p className="text-sm md:text-base">E-commerce setup with payment integration and dashboard</p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-highlight text-2xl"><AiFillThunderbolt /></p>
              <p className="md:text-lg font-medium"> Fast and responsive</p>
              <p className="text-sm md:text-base">Websites Optimized for speed and mobile-first Usage</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="mb-50 max-w-6xl mx-auto px-6 mt-32 md:mt-64"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl md:text-5xl text-center">Checkout My <span className="text-highlight">Projects</span></div>
        <div className="mt-10 grid grid-cols md:grid-cols-2 md:w-3xl lg:w-4xl gap-7 mx-auto">
          {projects.map((project, i)=>(
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                name={project.name}
                imageUrl={project.imageUrl}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="max-w-2xl mx-auto px-6 mt-10 md:mt-40 lg:mt-50 nm mb-30" 
        ref={contactSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-medium">Get in touch</div>
        <p className="text-gray-400">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>
         <div className="flex justify-around w-50 text-gray-600 mt-2 mx-a text-xl">
            <a href="https://x.com/TechTitan_1" className="hover:text-gray-900"><FaXTwitter /></a>
            <a href="https://www.instagram.com/abdullahi_ige/" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@codebyige" className="hover:text-gray-900"><FaTiktok /></a>
            <a href="https://github.com/Abdullahiolajide" className="hover:text-gray-900"><LuGithub /></a>
            <a href="mailto:techtitan060@gmail.com" className="hover:text-gray-900"><MdOutlineMail /></a>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-4" >
          <div className="flex space-x-2">
            <input required name="full-name" id="full-name" type="text" placeholder="Full Name" className="w-full rounded-2xl h-14 px-5 demo-btn p-card"/>
             <ValidationError 
              prefix="Full Name" 
              field="full-name"
              errors={state.errors}
            />
            <input required name="email-address" id="email-address" type="text" placeholder="Email Address" className="w-full border border-gray-300 bg-gray-100 rounded-2xl h-14 px-5 demo-btn p-card"/>
            <ValidationError 
              prefix="Email" 
              field="email-address"
              errors={state.errors}
            />
          </div>
          <textarea required name="message" id="message" placeholder="Write a message" className="w-full demo-btn p-card rounded-2xl h-40 px-5 py-5"></textarea>
          <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          <input type="submit" value={'Send Message'} className="btn-bg w-full text-white rounded-2xl h-14 px-5"/>
          
        </form>
      </motion.section>
    </div>
  )
}
