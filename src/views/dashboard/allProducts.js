import React,{useState,useEffect} from "react";
import { Space, Table } from "antd"
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
// import allAvailableProducts from "../../assets/constants/product.json"
import agricultureProductApis from "../../services/agricultureProductApis";




const columns = [
    {
        title: 'PRODUCT NAME',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: "AVAILABLE QUANTITY",
        dataIndex: "available_quantity",
        key: "available_quantity",
    },
    {
        title: "POSTED DATE",
        dataIndex: "posted_date",
        key: "posted_date",
    },
    {
        title: "EXPIRATION DATE",
        dataIndex: "expired_date",
        key: "expired_date",
    },
    // {
       
    //     title: "Phone",
    //     dataIndex: "seller_phone",
    //     key: "seller_phone",
    // },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Actions",
        key: " actions",
        fixed:"right",
        width: 100,
        render:()=>(
            <Space size="middle">
                <a> <EyeOutlined/> </a>
                <a> <DeleteOutlined/> </a>
                <a href=""><EditOutlined/> </a>
            </Space>
        )
    }
];





const AllProduct = () => {

    const [getAllProducts, setGetAllProducts] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllProducts().then((res) => {
      console.log(res);
      setGetAllProducts(res.data.data);
    });
  }, []);


    return (
        <>
        <Table className="bg-dark"  columns={columns}  dataSource={getAllProducts}/>
       </>

    )

}

export default  AllProduct;