import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";



const ProductCard = ({ data }) => {

  return (
    <>
      
      <div className="card-container">
        <div className="card">
          
            <img src={data.images[0]} />
          

          <h1>{data.title}</h1>

          <p>{data.description}</p>
          <br />
          <div className="card-cont">
            <div>
              <p>available_quantity:{data.available_quantity}</p>
              <p>posted_date:{data.posted_date}</p>
              <p>expired_date:{data.expired_date}</p>
              <p>price:{data.price}</p>
              <p>seller_name:{data.seller_name}</p>
              <p>seller_phone:{data.seller_name}</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
