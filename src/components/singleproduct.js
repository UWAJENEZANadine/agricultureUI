import { useState } from "react";
import "./singleproduct.css";
import ReactDOM from 'react-dom';

const SingleProduct = ()=> {

  return (
      <div className="form">
    <form>
        <p>we are happy to serve you any choice of your product</p>
      <label>Enter Quantity:
        <input
          type="text" 
          
        />
      </label>
      <button><a href= "./order">Send</a></button>
    </form>
    </div>
  )

};


export default SingleProduct;