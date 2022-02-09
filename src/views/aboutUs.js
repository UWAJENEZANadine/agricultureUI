import React from "react";
import HomeLayout from "../components/homeLayout";
import "../css/aboutUs.css";
import {
  DribbbleSquareOutlined,
  FieldBinaryOutlined,
  FieldNumberOutlined,
} from "@ant-design/icons";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="aboutUs-container"><h1>ABOUT US</h1> </div>
      <div className="about-header">
        {" "}
        <h1>WHY CHOOSE US</h1>
      </div>

      <div className="container ">
        <div className="row justify-content-around about1-container">
          <div className=" col-10 col-sm-6 col-md-4 mb-4 bout-col1">
            <FieldBinaryOutlined
              className="antdd-style"
              style={{ fontSize: "3em" }}
            />
            <p>
              We are innovators in agricultural business. We can call ourselves
              the innovators in agricultural business. And these are not just
              words. You can find real proof reading more about our company.
            </p>
          </div>

          <div className=" col-10 col-sm-5 col-md-3 mb-4 about-col2">
            <FieldNumberOutlined
              className="antdd-style"
              style={{ fontSize: "3em" }}
            />
            <p>
              Providing quality agricultural products. We supply quality fruit
              and vegetables to different countries all over the world. Our
              crops are carefully gathered and stored to get to our customers
              fresh.
            </p>
          </div>

          <div className=" col-10 col-sm-6 col-md-4 mb-4 mr-4 about-col3">
            <DribbbleSquareOutlined
              className="antdd-style"
              style={{ fontSize: "3em" }}
            />
            <p>
              Even greater things are coming. We continue to develop our
              capacities. Even more fruits and vegetables will be grown and
              gathered in the nearest future. The total number of our livestock
              is also increasing.
            </p>
          </div>
        </div>
      </div>
      <div className="container location-container">
      <hr className="horizontal-line"></hr>

      <div className="location-container">
        {/* <div className="locationi-container">
          {/* <img src="https://ars.els-cdn.com/content/image/1-s2.0-S2211912418301160-fx1.jpg"  style={{ width:"450px", height:"390px"}}/> */}
"
        {/* </div> */} 
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5443313194805!2d30.073368114104507!3d-1.9345318372208409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a5f7eeb027%3A0xec192fd8663d497d!2sRwanda%20National%20Police%20Headquarters!5e0!3m2!1sen!2srw!4v1643276583105!5m2!1sen!2srw"
            style={{
              width: "100%",
              height: "400px",
              border: "0",
              allowfullscreen: "yes",
              loading: "lazy",
            }}
          ></iframe>

        <div className="row justify-content-around">
          <div className="col-10 mt-5 col-sm-5 col-md-5 mb-4  locationi-container">
            <img
              src="https://ars.els-cdn.com/content/image/1-s2.0-S2211912418301160-fx1.jpg"
              style={{ width:"390px",height: "390px" }}
            />
            
          </div>
          <div className="col-10 mt-5 col-sm-5 col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5443313194805!2d30.073368114104507!3d-1.9345318372208409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a5f7eeb027%3A0xec192fd8663d497d!2sRwanda%20National%20Police%20Headquarters!5e0!3m2!1sen!2srw!4v1643276583105!5m2!1sen!2srw"
              style={{
                width:"400px",
                height: "390px",
                border: "0",
                allowfullscreen: "yes",
                loading: "lazy",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
