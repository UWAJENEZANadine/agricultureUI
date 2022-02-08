import React from "react";
import { Space, Table } from "antd"
import buyerInfo from "../../assets/constants/buyerInfo.json"



const column = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastNamee",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
   

    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        
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
        <Table className="bg-dark" columns={column}  dataSource={buyerInfo} />
       </>

    )

}

export default  AllOrder;