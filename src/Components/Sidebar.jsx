import './Sidebar.css';
// import { motion } from "framer-motion"

import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import { TbCheckupList } from "react-icons/tb";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
// import { IoCall } from "react-icons/io5";




export default function Sidebar({ children }) {

    function red(){
        alert(`Disable the menu!`);
    }
    function green(){
        alert(`Enable the menu!`);
    }
    const menuItems = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/Service",
            name: "Service",
            icon: <FaUserDoctor />
        },
        {
            path: "/AboutUs",
            name: "AboutUs",
            icon: <TbCheckupList />
        },
        {
            path: "/ContactUs",
            name: "ContactUs",
            icon: <IoIosPeople />
        },
        {
            path: "/info",
            name: "information",
            icon: <BsInfoCircleFill />
        },
    ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar">
                    
                    {menuItems.map((route) => (
                        <NavLink className="navlink" to={route.path} key={route.name}>
                            <div className="icons">
                                {route.icon}
                            </div>
                        </NavLink>
                    ))}


                    <div className="lowpart">
                        <div className='icons' onClick={green}>{<MdOutlineWbSunny/>}</div>
                        <div className='icons' onClick={red}>{<IoSettingsSharp/>}</div>
                    </div>


                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}
