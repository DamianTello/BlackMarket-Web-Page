import { useContext, useEffect } from "react"
import { Button } from "./Header/Buttons/Button"
import { Navigate, NavLink } from "react-router-dom"
import { UserSessionContext } from "../Context/UserSessionProvider"
import { axiosInstance } from "../axios"

export const SignOut = () => {
    const {isLoggedin} = useContext(UserSessionContext)

        function removedata() {
            localStorage.removeItem('uid')
            localStorage.removeItem('authToken')
            localStorage.removeItem('client')
            Navigate("/SignIn")
        }


        function LoggedOut() {

        if (isLoggedin) {
        const HandleSignOut = async (event) => {

            event.preventDefault();
            console.log('sesion cerrada');
            try{
                const response = await axiosInstance.delete("/users/sign_out")
                
                console.log("Success deleting user")
            }catch(e){e.console.error();
            }
        }
    }
}
    

    return (
        <>
        
            <div className="flex flex-col justify-end items-center max-w-60 md:ml-5 md:block sm:flex sm:flex-col cell:ml-5">
            <NavLink to="/" onClick={removedata}><Button content={'Sign Out'}></Button></NavLink>
            </div>
        </>
    )
}