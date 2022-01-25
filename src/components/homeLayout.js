
import React from "react"
import Header from "./header"
import "./homeLayout.css"


const HomeLayout = ({children}) =>{
    return(
        <>
        <Header></Header>
        <div className="home-container">
            <div style={{height:"1500px"}}>
                {children}
            </div>

            
        </div>
        </>


        

    )

}
export default HomeLayout