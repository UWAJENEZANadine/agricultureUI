import React from "react";
import logo from "../assets/images/igireLogo2.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="home1-container d-block">
          <div class="top d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={logo} />
          </div>
          <h1>IGIRE MUHINZI</h1>
          </div>
          {/* <div id="google_translate_element"></div> */}

            
            <div className="nav-container d-flex justify-content-around">
              <a href="home">Home</a>
              <a href="SignUp">SignUp</a>
              <a href="SignIn">SignIn</a>
              <a href="AboutUs">About Us</a>
              <a href="product">Products</a>
              
            </div>
          
        </div>
    </>
  );
};
export default Header;
