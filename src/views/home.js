import React from "react";
import HomeLayout from "../components/homeLayout";
import { Carousel } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <HomeLayout>
      
      <div className="quote-div-container">
     
        
     
        <div className="quote-div">
          <p>IGIRE MUHINZI<br/><br/>
          E-COMMERCE PLATFORM FOR BUYING AND SELLING OF AGRICULTURAL PRODUCTS
            <br/><br/>
            <a href="/product" className="quote-button"> Buy Now</a>
          </p>
        </div>

        
        {/* </div> */}
      </div>



      <h1 style={{color:"rgb(131, 76, 5)"}}>BUY OUR CURRENT PRODUCT</h1>



      <Carousel variant="dark" className="slide Carousel-fade container-corousel">

        <Carousel.Item>
          <img
            className="d-block w-50 images-slide"
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Fruits</h5>
            <p>A fruit is a mature, ripened ovary,<br /> along with the contents of the ovary.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 active images-slide"
            src="https://www.ledgerinsights.com/wp-content/uploads/2019/03/coffee-blockchain-traceability.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Coffe</h5>
            <p>Coffee is a brewed drink prepared<br /> from roasted coffee beans</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 images-slide"
            src="https://www.macmillandictionary.com/external/slideshow/full/138920_full.jpg"
            alt="Third slide"
          />


          <Carousel.Caption className="caption-images">
            <h5>Wheat</h5>
            <p>
            Wheat is the seed of one of several <br />genera of the flowering plant family Fabaceae
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 active images-slide"
            src="https://cathe.com/wp-content/uploads/2018/05/shutterstock_611525876.jpg"
            alt="fourth slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Beans</h5>
            <p>A bean is the seed of one of several <br />genera of the flowering plant family Fabaceae</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </HomeLayout>
  );
};

export default Home;
