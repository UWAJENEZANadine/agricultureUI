import React from "react";
import { Space, Table } from "antd"
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import allAvailableProducts from "../../assets/constants/product.json"



const columns = [
    {
        productname: 'PRODUCT NAME',
        dataIndex: 'productname',
        key: 'productname',
    },
    {
        productname: "DESCRIPTION",
        dataIndex: "description",
        key: "description",
    },
    {
        productname: "AVAILABLE QUANTITY",
        dataIndex: "availablequantity",
        key: "availablequantity",
    },
    {
        productname: "POSTED DATE",
        dataIndex: "posteddate",
        key: "posteddate",
    },
    {
        productname: "EXPIRATION DATE",
        dataIndex: "expirationdate",
        key: "expirationdate",
    },
    {
       
        productname: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        productname: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        productname: "Actions",
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

    return (
        <>
        <Table columns={columns}  dataSource={allAvailableProducts}/>
       </>

    )

}

export default  AllProduct;