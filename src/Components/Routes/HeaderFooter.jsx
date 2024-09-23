import { HeaderLogOut } from "../Header"
import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"
import { HeaderSignOut } from "../Header/HeaderSignOut"
import { useContext, useEffect } from "react"
import { UserSessionContext } from "../../Context/UserSessionProvider"


export const HeaderFooter = () => {
    const{isLoggedin} = useContext(UserSessionContext);

  
    function Logged() {
        if (isLoggedin) {
           return  <HeaderSignOut/>
        }else{
            return  <HeaderLogOut/>
        }
    }
    return <>

        {Logged()}
        <main className="flex flex-col-1 w-full max-w-full">
        <Outlet/>
        </main>
        <Footer/>       
    </>
}