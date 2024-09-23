
import { SignInSignUp } from "./Buttons/SignInSignUp"
import { NavLink } from "react-router-dom"
import { Navigation } from "./Buttons/Navigation"
import { Navbar } from "./Navbar"
import Logo1 from "./IMG/Logo1.png"
import { Menu } from "./Menu"
import "./HeaderLogOut.css"
import { useState } from 'react';

export const HeaderLogOut = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return <div className="grid grid-cols-8 gap-4 py-5 pl-3 pr-0 w-full max-w-full items-center text-whitish
                                ">
                <div  className="col-span-2">
                <SignInSignUp />  
                </div>
                <div  className="col-span-4">
                <NavLink className="w-3/5 p-4" to="/"><img className="w-full"src={Logo1} alt="" /></NavLink>
                </div>
                <div  className="col-span-2">
                <Menu className="w-1/5 p-4"toggleMenu={toggleMenu}/> 
                </div>


                <div className={`col-span-8 overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    menu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <Navbar menu = {menu}/>            
                </div>
                <div className={`col-span-8 overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    menu ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'
                }`}>
                <Navbar/>                      
                </div>
                     
            </div>
}
