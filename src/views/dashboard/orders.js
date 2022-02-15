import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import buyerInfo from "../../assets/constants/buyerInfo.json";
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
    title: "Gender",
    
    key: "gender",
     render:(record)=>(
        <Tag color={record.gender === "male"? "greekblue" : "pink"}>
           {record?.gender.toUpperCase()}
           </Tag>
     )
  },
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Actions",
    key: " actions",
    fixed:"right",
    width: 100,
    render:()=>(
        <Space size="middle">
            <a> accepted</a>
            <a> Declined </a>
            <a>canceled</a>
        </Space>
    )
}
  

  
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
      <Table className="bg-dark" columns={column} dataSource={allUsersData} />
    </>
  );
};

export default AllOrder;
