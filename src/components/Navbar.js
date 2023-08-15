import React from "react"
import { useState } from "react";
import Logo from "../images/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
function Navbar() {
const [nav, SetNav] = useState(false)
const handelclick = () => SetNav(!nav)
    return (
        <div className="fixed  flex justify-between p-2 w-full items-center text-white bg-slate-950">
            <div>
                <img className="transition hover:scale-125" src={Logo} alt="logo" style={{ width: '50px' }} />
            </div>
            {/*Menu*/}
            
                <ul className=" flex  grid-flow-col gap-x-6 px-4 ">
                <li className="transition hover:scale-125"><Link  to="home"  smooth={true}  duration={500} >
                Home
        </Link></li>

                <li className="transition hover:scale-125"><Link  to="about"  smooth={true}  duration={500} >
                AboutMe
        </Link></li>
                <li className="transition hover:scale-125"><Link  to="Skills"  smooth={true}  duration={500} >
                Experience
        </Link></li>
                <li className="transition hover:scale-125"><Link  to="Work"  smooth={true}  duration={500} >
                work
        </Link></li>
             


                  
                </ul>
            

            {/*Hamburger ne aq*/}
            {/* <div onClick={handelclick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
                
                </div> */}

            {/*Mobile menu*/}
            {/* <div className={nav ? 'hidden' : ' absolute flex flex-col  top-0 left-0 h-screen bg-slate-950 justify-center items-center w-full'}>
                <ul>

                    <li className="py-6 text-4xl">AboutMe</li>
                    <li className="py-6 text-4xl">Home</li>
                    <li className="py-6 text-4xl">Experience</li>
                    <li className="py-6 text-4xl">work</li>
                    <li className="py-6 text-4xl">contact</li>

                </ul>
            </div> */}

            {/*Social icons */}
               <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul >

                    <li className="w-[140px] h-[60px] flex  justify-between items-center ml-[-80px] hover:ml-[-10px] duration-500 bg-linkedcolor">
                        <a className="flex justify-between  items-center w-full " href="https://www.linkedin.com/in/muhammed-izzet-demir-2a7635234/">Linkedin  <FaLinkedin size={30}/></a>
                    </li>
                    <li className="w-[140px] h-[60px] flex  justify-between items-center ml-[-80px] hover:ml-[-10px] duration-500 bg-githupcolor">
                        <a className="flex justify-between  items-center w-full " href="https://github.com/Muhammed-tr">Githup  <FaGithub size={30}/></a>
                    </li>
                    <li className="w-[150px] h-[60px] flex  justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-xs" href="/">5052722937  <FaPhoneAlt size={25}/></a>
                    </li>
                    <li className="w-[140px] h-[60px] flex  justify-between items-center ml-[-80px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
                        <a className="flex justify-between  items-center w-full " href="/">Mail  <HiMail size={30}/></a>
                    </li>
                 

                </ul>
               </div>

        </div>
    )

}
export default Navbar
