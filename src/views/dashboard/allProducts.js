import React from "react";
import { Space, Table } from "antd"
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";


const columns = [
    {
        title: 'productname',
        dataIndex: 'productname',
        key: 'productname',
    },
    {
        title: "description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "availablequantity",
        dataIndex: "availablequantity",
        key: "availablequantity",
    },
    {
        title: "date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "price",
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

const column = [
    {
        title: 'firstName',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: "lastName",
        dataIndex: "lastName",
        key: "lastName",
    },
    {
        title: "email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Actions",
        key: " actions",
        fixed:"right",
        width: 100,
        render:()=>(
            <Space size="middle">
                <a href="" style={{color:"green"}}>Accept </a>
                <a href="" style={{color:"red"}}>Decline </a>
          
            </Space>
        )
    }
   
];



const AllProduct = () => {

    return (
        <>
        <Table columns={columns} />
        <Table columns={column}  />
       </>

    )

}

export default  AllProduct;