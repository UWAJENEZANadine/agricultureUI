import React from "react";
import HomeLayout from "../components/homeLayout";
import products from "../assets/constants/products.json"

const OurProducts = () => {
    return (

        <HomeLayout>
         <div className="full-container">
             <div className="Singleproduct-container">
               {products.map((data) => (
                   <><div className="one-product">
                   <h1>{data.productname}</h1>
                   <div className="pro-description">
                    

                        {/* <img src={data.images[0]} width="100%" />
                    
                        <p>{data.description}</p>
                        <h1>Posted date:{data.posteddate}</h1><br />
                        <h1>expired date date:{data.expirationdate}</h1>
                        <h1>phone:{data.phone}</h1>
                        <h1>Available quantity:{data.availablequantity}</h1> */}
                    </div>
                    
                    </div> </>
    )) }
                </div>
                </div>
                
           
                </HomeLayout> )
}

export default OurProducts;