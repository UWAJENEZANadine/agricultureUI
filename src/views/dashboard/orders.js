import React from "react";
import { Space, Table } from "antd"
import buyerInfo from "../../assets/constants/buyerInfo.json"



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



const AllOrder = () => {

    return (
        <>
        <Table columns={column}  dataSource={buyerInfo}/>
       </>

    )

}

export default  AllOrder;