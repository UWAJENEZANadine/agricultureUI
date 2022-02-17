import axios from "axios";
import store from "store"


const AGRICULTURE_APIS_URL = "http://localhost:5050";
// const AGRICULTURE_APIS_URL = "https://projectagriculture-api.herokuapp.com";

var config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
  },
};

class Application {


  async createAccount(data) {
    try {
      const response = await axios.post(
        AGRICULTURE_APIS_URL + "/user/register",
        data,
        config
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllUsers() {
    try {
      const response = await axios.get(
        AGRICULTURE_APIS_URL + "/order/all/product/:id",
        config
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  }


  async getAllProducts() {
    try {
      const response = await axios.get(
        AGRICULTURE_APIS_URL + "/products/all",
        config
      );


      return response;
    } catch (error) {
      console.log(error);
    }
  };

  async deleteProduct(id){
  
    try{
      const response = await axios.delete(
        AGRICULTURE_APIS_URL + "/products/"+id,
        config
      );
      
      return response;
    }catch(error){
      console.log(error)
    }


  }
 
}



export default new Application();
