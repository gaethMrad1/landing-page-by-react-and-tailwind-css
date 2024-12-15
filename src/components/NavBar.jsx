import { useRef } from "react"
import { Link } from "react-scroll";

function NavBar() {
  const dropDownMenu = useRef();

  const handleShowDropDownMenu = () => {
    dropDownMenu.current.classList.toggle("active")
  }

  return (
    <nav className="bg-white fixed w-full h-[70px] flex items-center z-50">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#top" className="logo mr-[25px] text-center text-xl lg:text-2xl font-bold text-stone-900 uppercase">react landing page</a>
            <ul className="hidden md:flex md:items-center md:gap-9">
                <li><Link
                to="features" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">features</Link></li>
                <li><Link
                to="about" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">about</Link></li>
                <li><Link
                to="services" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">services</Link></li>
                <li><Link
                to="gallery" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">gallery</Link></li>
                <li><Link
                to="testimonials" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">testimonials</Link></li>
                <li><Link
                to="team" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">team</Link></li>
                <li><Link
                to="contact" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-stone-700 hover:before:w-full">contact</Link></li>
            </ul>
            <div className="drop-down-menu md:hidden relative">
                <i onClick={handleShowDropDownMenu} className="fa-solid fa-bars text-3xl text-stone-900 cursor-pointer"></i>
                <ul ref={dropDownMenu} className="drop-down-menu absolute right-0 rounded-ee-3xl rounded-ss-3xl p-[15px] bg-stone-900 hidden flex-col gap-[15px] w-[300px] z-10">
                  <li><Link
                  to="features" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">features</Link></li>
                  <li><Link
                  to="about" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">about</Link></li>
                  <li><Link
                  to="services" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">services</Link></li>
                  <li><Link
                  to="gallery" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">gallery</Link></li>
                  <li><Link
                  to="testimonials" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">testimonials</Link></li>
                  <li><Link
                  to="team" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">team</Link></li>
                  <li><Link
                  to="contact" spy={true} smooth={true} offset={-50} duration={500} activeClass="active" className="nav-link cursor-pointer uppercase relative before:content-[''] before:absolute before:w-[0px] before:h-[3px] before:bottom-[-5px] before:rounded-full before:left-0 before:duration-700 before:bg-blue-700 text-white hover:before:w-full">contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar