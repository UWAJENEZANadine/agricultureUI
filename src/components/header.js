import React from "react";
import logo from "../assets/images/igireLogo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="logo-container">
         
        <div className="home1-container">
      
          <img src={logo} />
          <h1>IGIRE MUHINZI</h1>
          {/* <div id="google_translate_element"></div> */}
         
          <div className="nav-nav">
          
            <div className="nav-container">
              <a href="home">Home</a>
              <a href="SignUp">SignUp</a>
              <a href="SignIn">SignIn</a>
              <a href="AboutUs">About Us</a>
              <a href="product">Products</a>
              
             

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
