import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Spin } from "antd";
import agricultureProductApis from "../../services/agricultureProductApis";


const column = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
  },


 

  {
        title: "status",
        key: " actions",
        fixed:"right",
        width: 100,
        render:(text, record)=>(
            <Space size="middle">
                <a href="#">accepted </a>
                <a href="#" style={{color:"green"}}>declined </a>
                <a href="#" style={{color:"red"}}>canceled </a>
            </Space>
        )
    },
];

const AllOrder = () => {
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllUsers().then((res) => {
      console.log(res);
      setAllUsersData(res.data.data);
    });
  }, []);

  return (
    <>
     {allUsersData.length == 0 ? (
       <div style={{marginLeft:"50%", paddingTop:"10%"}}>
         <Space size="middle" >
           <Spin size="small" />
           <Spin />
           <Spin size="large" />
         </Space>
         </div>
         
      ) : (

      <Table className="bg-dark" columns={column} dataSource={allUsersData} />
      )}
    </>
  )
};

export default AllOrder;
