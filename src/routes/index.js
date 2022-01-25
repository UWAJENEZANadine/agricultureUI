
import { Routes, Route } from "react-router-dom";
import Home from "../views/home"
import React from "react";

const Index = () =>{
    return(
        <Routes>
            <Route element ={<Home/>} path ="/home"></Route>
        </Routes>
    )
}
export default Index