
import React from "react"
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../views/home";
const Index=()=>{
    const currentUrl=useLocation.pathname
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}
export default Index;

