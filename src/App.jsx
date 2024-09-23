import ReactDOM from 'react-dom/client'
import React, { useContext } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from "./Components/Home"
import { RouterError } from "./Components/RouterError"
import { HeaderFooter } from "./Components/Routes/HeaderFooter"
import { Terms } from './layouts/Termsandconditions'
import { Shipments } from './layouts/Shipments'
import { PaymentMethods } from './layouts/PaymentMethods'
import { FormLayout } from './layouts/FormLayout'
import { ProductDetails } from './layouts/ProductDetailsLayout'
import { CartLayout } from './layouts/CartLayout'
import { Navigate } from 'react-router-dom'
import { UserSessionContext } from './Context/UserSessionProvider'
import { FavoritesLayout } from './layouts/FavoritesLayout'


function App() {
const{isLoggedin} = useContext(UserSessionContext);
  
const router = createBrowserRouter([
  {
    path : '/',
    element: <HeaderFooter/>,
    errorElement : <RouterError/>,
    children:[
    { 
      path : '/',
      element : (isLoggedin ? <Home/> : <Navigate to = 'SignIn'/>)
    },
    { 
      path: 'SignUp',
      element : isLoggedin ? <Navigate to='/'/> : <FormLayout formToggle={"SignUp"} formTitle={"Sign Up"} submitButtonText={"Create account"}/>
    },
    {
      path: 'SignIn',
      element: isLoggedin ? <Navigate to='/'/> :  <FormLayout formToggle={"SignIn"} formTitle={"Sign In"} submitButtonText={"Login"}/>
    },
    {
      path : 'TermsAndConditions',
      element : <Terms/>
    },
    {
      path : 'Shipments',
      element : <Shipments/>
    },
    {
      path:'PaymentMethods',
      element:<PaymentMethods/>
    },
    {
      path : 'ProductDetails/:id',
      element : <ProductDetails/>
    },
    {
      path: 'Cart',
      element: isLoggedin ? <CartLayout /> : <Navigate to='/SignIn' />
    },
    {
      path: "Favourite",
      element: isLoggedin ? <FavoritesLayout/> : <Navigate to='/SignIn' />
    }
  ]
  }

])

  return (
    
    <RouterProvider router={router} />
    
  )
  }
  
  export default App

