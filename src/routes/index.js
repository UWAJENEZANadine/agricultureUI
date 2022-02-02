
import React from "react"
import {Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import AboutUs from "../views/aboutUs";
import Signin from "../views/signin";
import SignUp from "../views/SignUp"
import NewProductPost from "../views/dashboard/newProduct";
import DashLayout from "../components/DashboadLayoutForSeller"
import AllProduct from "../views/dashboard/allProducts"
const isUserLogedIn = localStorage.getItem("userLogedIn");

const Index=()=>{
    const currentUrl = useLocation().pathname
    return(
        <>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path= "/signin" element={<Signin/>}/>

            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>

        </Routes>

        
           
{
    isUserLogedIn  && currentUrl.includes("/dash") ?(
        <DashLayout>
            <Routes>
                <Route path="/dash/newProduct" element={<NewProductPost/>}></Route>
                <Route path="/dash/allProducts" element={<AllProduct/>}></Route>
               
            </Routes>

        </DashLayout>  )
   :(<></>)
    }
    </>
    
    
)}
export default Index;

