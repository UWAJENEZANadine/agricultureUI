import React from "react";
import HomeLayout from "../components/homeLayout";
import { Carousel } from "react-bootstrap";
import "./home.css";
import topThreeProduct from "../assets/constants/topThree.json"
const Home = () => {
  return (
    <HomeLayout>
      <div className="quote-div-container">
        <div className="quote-div">
          <p>
            E-COMMERCE PLATFORM FOR BUYING AND SELLING OF AGRICULTURAL PRODUCTS
            <br />
            <br />
            <div className="button1">
              <a href="/product"> Buy Now</a>
            </div>
          </p>
        </div>

        {/* </div> */}
      </div>

      <h1 style={{ color: "rgb(131, 76, 5)" }}>BUY OUR CURRENT PRODUCT</h1>

      <Carousel
        variant="dark"
        className="slide Carousel-fade container-corousel"
      >
        {topThreeProduct.map((prod) => (
          <Carousel.Item>
            <img
              className="d-block w-50 images-slide"
              src={prod.image[0]}
              alt="Third slide"
            />

            <Carousel.Caption className="caption-images">
              <div className="d-block w-100  productCoverDiv">
                <h5>{prod.title}</h5>
                <p>
                  {prod.description}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HomeLayout>
  );
};

export default Home;
