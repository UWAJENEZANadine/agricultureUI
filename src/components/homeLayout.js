
import React from "react";
import Header from "./header";
import Footer from "./footer"
import "./homeLayout.css"


const HomeLayout = ({children}) =>{
    return(
        <>
        <Header></Header>
        <div className="home-container">
            <div style={{height:"1500px",  background:"red"}}>
                {children}
            </div>
            <Footer></Footer>

            
        </div>
        </>


        

    )

}
export default HomeLayout