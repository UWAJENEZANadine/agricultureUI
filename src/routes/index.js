
import React from "react"
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../views/home";
import ProductView from "../views/product";
const Index=()=>{
    const currentUrl=useLocation.pathname
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<ProductView/>}/>
        </Routes>
    )
}
export default Index;

