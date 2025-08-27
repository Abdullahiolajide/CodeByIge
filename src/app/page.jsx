import Image from "next/image";
import { DiWebplatform } from "react-icons/di";
import { LiaStoreSolid } from "react-icons/lia";
import { AiFillThunderbolt } from "react-icons/ai"
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home(){
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
      description:'A waitlist landing page for an individual launching a product',
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
      imageUrl:'/images/lcp.png',
      description:'Personal Freelance to showcase works and attract clients',
      link:'https://abdullahiolajide.github.io/fidealz'
    },
  ]
  return(
    <div>
      {/* <Image 
        src={'/images/design.png'}
        width={600}
        height={400}
        alt=""
        className="absolute top-0 mx-6 mt-2 -z-10"
      /> */}
      {/* border-l-2 border-r-2 border-gray-100 */}
      <div className="md:mx-4 max-w-6xl relative lg:mx-auto px-4 mt-8 md:mt-25 lg:mt-35 flex items-center flex-1 flex-col lg:flex-row">
        <div className="mt-10 rtop lg:mt-0 space-y-6">
          <div className="text-highlight border rounded-4xl px-2 w-fit mx-auto lg:mx-0 align-1 mb-5">Welcome</div>
          <div className="text-3xl md:text-5xl lg:text-6xl text-1 text-center lg:text-left  font-bold mt-5">
            <span className="">Hey, </span>I'm  Ige <span className="">Abdullahi</span> <br />
            <span className="text-highlight">Web<span className="sh">site</span> developer</span>
          </div>
          <p className="text-gray-400 max-w-xl mt-3 text-sm md:text-base text-center text-1 lg:text-left">Creating innovative solutions and captivating designs.
              University student by day, visionary creator by night.</p>

              <div className="mt-3 space-x-2 md:space-x-4 mx-auto lg:mx-0 w-fit align-1">
                <button className="btn-bg text-white py-3 px-4 cursor-pointer rounded-lg md:text-lg">Hire me</button>
                <button className="py-3 px-4 cursor-pointer rounded-lg md:text-lg">View my work </button>
              </div>
        </div>
        <div className="lg:absolute position-1 lg:right-0 mt-12 lg:mt-0 bg-green-900">
         <div className="relative w-full flex items-center justify-center">
           <div className="relative w-[250px]  md:w-sm h-60 md:h-80 me-10 mx-auto btn-bg">
            <Image 
                src={'/images/avatar-removed.png'}
                width={650}
                height={450}
                alt=""
                className="absolute mx-6 bottom-0 z-10"
              />
          </div>
          <div className="w-[230px]  md:w-sm flex right-0 h-50 md:h-80 me-10 ml-auto border border-red-300 border-4 mt-14 me-22 absolute top-0"></div>
         </div>
        </div>

       <div>
       </div>
      </div>
         {/* <div className="rotate-90 absolute top-60 right-20">follow me</div> */}

      <section className="max-w-6xl mx-auto px-6 mt-30 md:mt-40 lg:mt-50 nm mb-20">
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
              <button className="btn-bg text-white py-3 px-4 cursor-pointer rounded-lg md:text-md mt-4">Hire me</button>
          
          </div>

          <div className="w-full right-0 flex items-center mt-10">
            <div className="flex flex-col space-y-15 md:pl-10">
              <div>
              <p className="text-highlight text-2xl"><DiWebplatform /></p>
             <p className="md:text-lg font-medium"> Web development</p>
             <p className="text-sm md:text-base">I build Business websites, portfolios, landing pages</p>
            </div>

            <div>
              <p className="text-highlight text-2xl"><LiaStoreSolid /></p>
             <p className="md:text-lg font-medium">Online Stores</p>
             <p className="text-sm md:text-base">E-commerce setup with payment integration and dashboard</p>
            </div>

            </div>
            <div>
              <p className="text-highlight text-2xl"><AiFillThunderbolt /></p>
             <p className="md:text-lg font-medium"> Fast and responsive</p>
             <p className="text-sm md:text-base">Websites Optimized for speed and mobile-first Usage</p>
            </div>
          </div>
        </div>
      
      </section>
      <section className="mb-50 max-w-6xl mx-auto px-6 mt-32 md:mt-64">
        <div className="text-4xl md:text-5xl text-center">Checkout My <span className="text-highlight">Projects</span></div>
        <div className="mt-10 grid grid-cols md:grid-cols-2 md:w-3xl lg:w-4xl gap-7 mx-auto">

          {projects.map((project, i)=>(
          <div key={i}>
            <ProjectCard
            name={project.name}
            imageUrl={project.imageUrl}
            description={project.description}
            link={project.link}
          />
          </div>

          ))}
        </div>
 
      </section>


      <section className="max-w-2xl mx-auto px-6 mt-10 md:mt-40 lg:mt-50 nm mb-30">
        <div className="text-4xl font-medium">Get in touch</div>
        <p className="text-gray-400">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>

        <form action="" className="mt-10 space-y-4" >
          <div className="flex space-x-2">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 bg-gray-100 rounded-2xl h-14 px-5"/>
            <input type="text" placeholder="Email Address" className="w-full border border-gray-300 bg-gray-100 rounded-2xl h-14 px-5"/>
          </div>
            
            <textarea name="" id="" placeholder="Write a message" className="w-full border border-gray-300 bg-gray-100 rounded-2xl h-40 px-5 py-5"></textarea>
            <input type="submit" value={'Send Message'} className="btn-bg w-full text-white rounded-2xl h-14 px-5"/>
        </form>

      </section>

    </div>
  )
}