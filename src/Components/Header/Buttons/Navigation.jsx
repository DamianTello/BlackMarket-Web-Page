import "./Navigation.css"
import { NavLink } from "react-router-dom"

export const Navigation = () =>{
    return <div className="navigation">
            <NavLink to="/Fitness"><h2>Fitness</h2></NavLink>
            <NavLink to="/Consolas"><h2>Consolas</h2></NavLink>
            <NavLink to="/Electrodomesticos"><h2>Electrodomesticos</h2></NavLink>
            <NavLink to="/Hogar"><h2>Hogar</h2></NavLink>
    </div>


}