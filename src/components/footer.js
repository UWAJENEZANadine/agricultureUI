import React from "react";
import {TwitterOutlined} from "@ant-design/icons";
import{LinkedinOutlined} from "@ant-design/icons";
import {FacebookOutlined} from "@ant-design/icons";
import {CopyrightOutlined} from "@ant-design/icons";
import {CloudUploadOutlined} from "@ant-design/icons";
import {PhoneOutlined} from "@ant-design/icons";
import {InboxOutlined} from "@ant-design/icons";
import {BellOutlined} from "@ant-design/icons";


import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="col1">
        <h2>Our services</h2>
        <CloudUploadOutlined style={{fontSize: '2em'}} /><a href="">Posting a product</a><br/><br/>
        <BellOutlined style={{fontSize: '2em'}} /><a href="">Ordering a Product</a>
      </div>
      <div className="col2">
        <h2>Contact Us</h2>
        <ul>
          <li>
          <InboxOutlined /><a href="">softwarechasers62@gmail.com</a><br/><br/>
          </li>
          <li>
          <PhoneOutlined /><a href="">+250786774605</a>
          </li>
        </ul>
      </div>
      <div className="col3">
          <h2>Follow US</h2>
          <a href="https://twitter.com/"><TwitterOutlined style={{fontSize: '2em'}} /></a>
          <a href="https://www.linkedin.com/"><LinkedinOutlined style={{fontSize: '2em'}} /></a>
          <a href="https://www.facebook.com/"><FacebookOutlined style={{fontSize: '2em'}}  /></a>
      </div>
    </div>
    <a href="" className="copyright"><CopyrightOutlined />software chasers</a>
     </>
  
   
    
    
  );
};
export default Footer;
