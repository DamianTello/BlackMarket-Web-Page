import "./Navbar.css"
import { NavLink } from "react-router-dom"


export const Navbar = ({menu}) => {

 return (<nav className={`${ menu ? 'isActive' : '' }`}>
        <ul className="menu-horizontal w-full">
            <li className="">
            <NavLink className="" to="/"><a href="#header">Home</a></NavLink>  
            </li>
            <li>
                <NavLink className="w-full" to="/Favourite"><a href="#">Favourite</a></NavLink>
            </li>
            <li>
                <NavLink className="w-full" to="/Cart"><a href="#">Cart</a></NavLink> 
            </li>
            <li>
                <a href="#footer">Contact</a>
            </li>

        </ul>
    </nav>
    )
}