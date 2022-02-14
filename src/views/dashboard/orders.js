import React,{ useState, useEffect }from "react";
import { Space, Table } from "antd"
// import buyerInfo from "../../assets/constants/buyerInfo.json"
import agricultureProductApis from "../../services/agricultureProductApis";



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
   

    // {
    //     title: "Status",
    //     dataIndex: "status",
    //     key: "status",
        
    // },
   

    {
        title: "Actions",
        key: " actions",
        fixed:"right",
        width: 100,
        render:(text,record)=>(
            <Space size="middle">
                <a href="#">view</a>
                <a href="#" >edit</a>
                <a href="#"style={{color:"red"}}>delete</a>

          
            </Space>
        )
    }

];




const AllOrder = () =>{
    const[allUsersData,setAllUsersData]=useState([]);
    useEffect(()=>{agricultureProductApis.getAllUsers().then((res)=>{
        console.log(res);
        setAllUsersData(res.data.data);
    })},[]);


    return (
        <>
        <Table className="bg-dark" columns={column}  dataSource={allUsersData} />
       </>

    )

}

export default  AllOrder;