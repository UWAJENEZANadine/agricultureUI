
import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import AboutUs from "../views/aboutUs";
import Signin from "../views/signin";
const Index=()=>{
//    onst currentUrl=useLocation.pathname c
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path= "/signin" element={<Signin/>}/>

        </Routes>
    )
}
export default Index;

