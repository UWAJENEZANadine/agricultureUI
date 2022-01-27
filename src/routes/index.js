
import React from "react"
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../views/home";
import AboutUs from "../views/aboutUs";
const Index=()=>{
    const currentUrl=useLocation.pathname
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>

        </Routes>
    )
}
export default Index;

