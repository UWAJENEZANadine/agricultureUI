
import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import AboutUs from "../views/aboutUs";
import SignUp from "../views/SignUp"
const Index=()=>{
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>

        </Routes>
    )
}
export default Index;

