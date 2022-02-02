import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import "./productCard.css"



const ProductCard = ({ data }) => {

  return (
    <>
      
      <div className="card-container">
          <div ></div>
      <img src={data.image[0]} />
          <h1>{data.title}</h1>
          <p>description{data.description}</p>
          <p>available_quantity{data.available_quantity}</p>
          <p>posted_date{data.posted_date}</p>
          <p>expired_date{data.expired_date}</p>
          <p>price{data.price}</p>
          <p>seller_name{data.seller_name}</p>
          <p>seller_phone{data.seller_phone}</p>
        
      </div>
    </>
  );
};
export default ProductCard;
