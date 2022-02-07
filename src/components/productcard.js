import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import "./productCard.css";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div className="image">
          <img src={data.image[0]} />
        </div>
        <div className="other">
          <h1>{data.title}</h1>
          <p>
            description{data.description}
            <br />
            <br />
            available_quantity{data.available_quantity}
            <br />
            posted_date{data.posted_date}
            <br />
            expired_date{data.expired_date}
            <br />
            price{data.price}
            <br />
            seller_name{data.seller_name}
            <br />
            seller_phone{data.seller_phone} <a>Order now!</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
