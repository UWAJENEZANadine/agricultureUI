
import React from "react";
import Header from "./header";
import Footer from "./footer"
import "./homeLayout.css"


const HomeLayout = ({children}) =>{
    return(
        <>
        <div class="wrapper">
        <Header></Header>
        <div className="home-container">
            <div style={{minheight:"280vh"}}>
                {children}
            </div>
            <Footer></Footer>

        </div>
        
        </div>
         </>
        

    )

}
export default HomeLayout