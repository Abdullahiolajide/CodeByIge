import Image from "next/image";

export default function Home(){
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
      <div className="md:mx-4 max-w-7xl relative lg:mx-auto px-4 h-[80vh] flex items-center flex-1 flex-col lg:flex-row">
        <div className="mt-10 rtop lg:mt-0 space-y-6">
          <div className="text-highlight border rounded-4xl px-2 w-fit mx-auto lg:mx-0 align-1">Welcome</div>
          <div className="text-3xl text-1 text-center lg:text-left md:text-5xl lg:text-6xl font-bold">
            Hey, I'm Ige <span className="">Abdullahi</span> <br />
            <span className="text-highlight">Website developer</span>
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
      </div>
    </div>
  )
}