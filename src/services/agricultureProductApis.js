import responsiveObserve from "antd/lib/_util/responsiveObserve";
import axios from "axios";
const AGRICULTUREUI_URL = "http://localhost:5050";
var config = {
    headers:{
        "Content-Type":"appliction/json",

    },
};

class Application{
    async getAllUsers(){
        try{
            const response = await axios.get(

                AGRICULTUREUI_URL+"/user/all",
                config
            );
            return response; }
            catch(error){
                console.log(error);
            }
    }
   
    }
    
export default new Application();