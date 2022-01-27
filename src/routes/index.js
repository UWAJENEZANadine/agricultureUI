
import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
const Index=()=>{
//    onst currentUrl=useLocation.pathname c
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}
export default Index;

