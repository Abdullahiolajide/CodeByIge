'use client'
const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="p-4  flex justify-between max-w-6xl mx-auto">
      <p>
        <span className="text-highlight font-bold text-[32px]">{"</>"}</span> <span className="text-[32px] font-bold">{" CodeByIge"}</span>
      </p>
      <ul className="flex items-center space-x-10">
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
      </ul>
      <button 
        onClick={toggleDarkMode} 
        className="px-3 py-1 rounded cursor-pointer"
      >
        T
      </button>
    </nav>
  )
}

export default Navbar
