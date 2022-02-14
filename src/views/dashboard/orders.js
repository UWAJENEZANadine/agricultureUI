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
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  // {
  //   title: "Gender",
  //   dataIndex: "gender",
  //   key: "gender",
    //  render:(record)=>(
    //     <Tag color={record.gender === "male"? "greekblue" : "pink"}>
    //        {record?.gender.toUpperCase()}
    //        </Tag>
    //  )
  // },

  {
        title: "Actions",
        key: " actions",
        fixed:"right",
        width: 100,
        render:(text, record)=>(
            <Space size="middle">
                <a href="#">view </a>
                <a href="#">Edit </a>
                <a href="#" style={{color:"red"}}>Delete </a>
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
      <Table className="bg-dark" columns={column} dataSource={allUsersData} />
    </>
  );
};

export default AllOrder;
