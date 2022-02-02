
import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";

import ProductView from "../views/product";

import AboutUs from "../views/aboutUs";
import Signin from "../views/signin";
import OurProducts from "../views/products";
import SignUp from "../views/SignUp";
import SignUp from "../views/SignUp

const Index=()=>{
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>

            <Route path="/product" element={<ProductView/>}/>

            <Route path="/about" element={<AboutUs/>}/>
            <Route path= "/signin" element={<Signin/>}/>

            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/products" element={<OurProducts/>}/>


        </Routes>
    )
}
export default Index;

