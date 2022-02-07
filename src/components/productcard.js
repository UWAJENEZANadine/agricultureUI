import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import "./productCard.css";
import SingleProduct from "./singleproduct";



const ProductCard = ({ data }) => {
  const [drawerVisible,setDrawerVisible] = useState(false);
  const handleclickDrawerVisible = () =>{
      setDrawerVisible(true);

  }
  const closeDrawerVisible = ()=> {
      setDrawerVisible(false);
  }

  console.log (data.image[0])
  return (
    <>
    <Drawer  title="Well, we have just the solution for you, Free delivery" placement="top" visible={drawerVisible} width={70} height={300}  onClose={() =>closeDrawerVisible()}>
<SingleProduct data={data}/>
        </Drawer>
      
      <div className="card-container">

        
        

          <div className="image" >
      <img src={data.image[0]} />
      </div>
      <div className="other">
          <h1>{data.title}</h1>
          <p>description{data.description}<br/><br/>
          available_quantity{data.available_quantity}<br/>
          posted_date{data.posted_date}<br/>
          expired_date{data.expired_date}<br/>
          price{data.price}<br/>
          seller_name{data.seller_name}<br/>
          seller_phone{data.seller_phone}
          </p>
          <div className="read" onClick={() => handleclickDrawerVisible()}>
          <label onClick={() => handleclickDrawerVisible()}> Order Now</label>
          </div>
          </div>


      </div>
    </>
  );
};
export default ProductCard;
