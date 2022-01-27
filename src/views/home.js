import React from "react";
import HomeLayout from "../components/homeLayout";
import "./home.css"
const Home=()=>{

    return(
        <HomeLayout>
<div className="animation" ></div>
<div className="description"><h1 style={{color:"black"}}>IGIRE MUHINZI</h1><br/>
<p style={{color:"black"}}>E-COMMERCE PLATFORM FOR BUYING AND SELLING AGRICULTURE PRODUCTS </p>
<div className="rows-container">

     <div className="row1">
         <div className="image1"></div>
         <div className="row1-description">
              <p> 
                 Agri e-commerce also increases farmers' access to new markets and 
                 adds transparency to the value chain. It enables
                  farmers to bypass several intermediaries, 
                  resulting in higher income for the farmers,
                  reduced wastage, and the potential to deliver
                   fresher produce to customers.<br/>
                   <button><a href="">sell yours</a></button></p>
         </div>
     </div>

    <div className="row2">
    <div className="image2"></div>
    <div className="row2-description">
        <p>The use of our E-commerce platform plays an important role in agriculture
             sector development, especially in reducing post-harvest
              wastage through improved market efficiency; increasing financial inclusion; time and cost saving;
             easy market access for inputs; efficient cash management; accountability and transparency.<br/>
            <button><a href="">Read more </a></button></p>
             
    </div>
    </div>
    <div className="row3">
    <div className="image3"></div>
    <div className="row3-description">
        <p>Nowadays, it gets really hard for people to reach out to their 
            favourite stores just to fetch their favourite products when 
            they can buy it by just a tap of their fingers! Ease of use, 
            time efficiency and easy payment are some of the few major reasons why E-commerce 
            has taken over today’s retail world.<br/>
            <button><a href="">Buy Now</a></button></p></div></div> 
</div>
</div>

        </HomeLayout>
       
              

      
     
    )
}

export default Home