import React from "react";
import HomeLayout from "../components/homeLayout";
import { Carousel } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <HomeLayout>
      
      <div className="quote-div-container">
      {/* <div className="quote-div-image">
        
      <img src="https://media.istockphoto.com/photos/african-woman-laughing-picture-id538889138?s=170667a" /> */}
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
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/fruit.jpg?quality=82strip=all"
            alt="First slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Fruits</h5>
            <p>A fruit is a mature, ripened ovary, along with the contents of the ovary.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 active images-slide"
            src="https://www.newtimes.co.rw/sites/default/files/main/articles/2019/02/18/rwandans.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Coffe</h5>
            <p>Coffee is a brewed drink prepared from roasted coffee beans</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 images-slide"
            src="https://bakerpedia.com/wp-content/uploads/2021/09/Whole-Grain-Wheat-Flour-e1632990518585-400x400.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caption-images">
            <h5>Wheat</h5>
            <p>
            Wheat is the seed of one of several genera of the flowering plant family Fabaceae
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </HomeLayout>
  );
};

export default Home;
