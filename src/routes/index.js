
import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import AboutUs from "../views/aboutUs";
const Index=()=>{
//    onst currentUrl=useLocation.pathname c
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>

        </Routes>
    )
}
export default Index;

