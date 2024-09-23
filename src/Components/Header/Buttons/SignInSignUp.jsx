import { Button } from "./Button"
import { NavLink } from "react-router-dom"

export const SignInSignUp = () => {

    return (
        <>
            <div className="flex flex-col max-w-2/5 justify-center items-center sm:p-0 space-y-1 xs:pr-4 cell:p-0 ">
                <NavLink className="w-full" to="/SignIn"><Button content='Sign In'/></NavLink>
                <NavLink className="w-full" to="/SignUp"><Button content='Sign Up'/></NavLink>
            </div>
        </>
    )
}
