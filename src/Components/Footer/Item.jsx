import { NavLink } from "react-router-dom"
import './Item.css'

export const Item = ({content,whereto}) => {
    return <NavLink to={whereto} className="item"><p className="text-whitish text-base ">{content}</p></NavLink>
}