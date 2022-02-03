import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import "./productCard.css"



const ProductCard = ({ data }) => {

  return (
    <>
      
      <div className="card-container">
          <div >
      <img src={data.image[0]} />
      </div>
      <div>
          <h1>{data.productname}</h1>
          <p>description{data.description}</p>
          <p>available_quantity{data.availablequantity}</p>
          <p>posted_date{data.posteddate}</p>
          <p>expired_date{data.expirationdate}</p>
          <p>Phone{data.phone}</p>
          <p>price{data.price}</p>
          </div>
        
      </div>
    </>
  );
};
export default ProductCard;
