import React, { useState, useEffect } from "react";
import { Space, Table, Skeleton ,notification} from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./allProducts.css"
// import allAvailableProducts from "../../assets/constants/product.json"
import agricultureProductApis from "../../services/agricultureProductApis";
import { Spin, Drawer, Button, Card, Modal} from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
} from "antd";
import { Popconfirm, message } from "antd";


const AllProduct = () => {
  const [isDrawerVisible, setIsDrawerVisible]= useState(false);
   const [visible, setVisible] = useState(false);
  
  const [user, setUser] =useState({});


  const [getAllProducts, setGetAllProducts] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllProducts().then((res) => {
      console.log(res);
      setGetAllProducts(res.data.data);
    });
  }, []);

function confirm(e) {
  console.log(e);
  agricultureProductApis.deleteProduct(e._id).then((res)=>{
    if (!res) {
      return notification.error({ message: "server is down" });
    }
    if (res.status === 200) {
      
  message.success("product deleted");
  window.location.reload()

    } else {
      return notification.error({
        message: !res.data.error ? res.data.message : res.data.error,
      });
    }
  });
};

const onFinish = (values) => {
function confirm(e) {
  console.log(e);
  agricultureProductApis.updateProduct(e._id).then((res)=>{
    if (!res) {
      return notification.error({ message: "server is down" });
    }
    if (res.status === 200) {
      
  message.success("product updated");
  window.location.reload()

    } else {
      return notification.error({
        message: !res.data.error ? res.data.message : res.data.error,
      });
    }
  });
}
}





function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

const columns = [
  {
    title: "PRODUCT NAME",
    dataIndex: "ProductName",
    key: "ProductName",
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
    fixed: "right",
    width: 100,
    render: (text, record) => (
      <Space size="middle">
        <a href=""  style={{color:"green"}} onClick={() => {
          setUser(record);
          setIsDrawerVisible(true)
        } }>
      
          <EyeOutlined />{" "}
        </a>
        

        <a href="">
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={()=>confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#"  style={{color:"red"}}><DeleteOutlined /></a>
          </Popconfirm>

        </a>

        <a href=""  onClick={() => {
          setUser(record);
          setVisible(true)
          
        } }><EditOutlined  /></a>
          
      
      </Space>
    ),
  },
];

  return (
    <>
      {getAllProducts.length == 0 ? (
       <div style={{marginLeft:"50%", paddingTop:"10%"}}>
         <Space size="middle" >
           <Spin size="small" />
           <Spin />
           <Spin size="large" />
         </Space>
         </div>
         
      ) : (
        <Table
          // className="bg-dark"
          columns={columns}
          dataSource={getAllProducts}
        />
       
      )}

      <Drawer className="drawer-container"
        placement ="top"
        onClose={()=>setIsDrawerVisible(false)}
        visible= {isDrawerVisible}
        height="top"
        >
      

      <Card  className="bg-info ">
        <Space>
        <h2  className="head-sty">Title:{user?.ProductName}</h2> </Space>
        {/* <p>{user?.image}</p> */}
        <Space className="col1"><h4 >Description</h4>{user?.description} </Space><br/>
        <Space className="col1"><h4>Avaiable Quantity:</h4>{user?.available_quantity} </Space> <br/>
        <Space className="col1"><h4>Posted date:</h4>{user?.posted_date} </Space><br/>
        <Space className="col1"><h4>Expired date:</h4>{user?.expired_date}</Space> <br/>
        <Space className="col1"><h4>Price:</h4>{user?.price}</Space><br/>
       
      </Card>

           
      </Drawer>


       <Modal
        visible={visible}
        width="50%"
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
        closable="true"
      >

<Form
      name="normal_register"
      className="register-form-product"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{ fontStyle: "oblique", fontFamily: "serif" }}>
        Fill this form to update
      </h1>
      <Form.Item
        name="ProductName"
        rules={[
          {
            required: true,
            message: "Please input ProductName!",
          },
        ]}
      >
        <label>Product Name:</label>
        <br />
        <Input placeholder="ProductName" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please input description!",
          },
        ]}
      >
        <label>Description:</label>
        <br />
        <Input placeholder="description" />
      </Form.Item>
      <Form.Item
        name="available_quantity"
        rules={[
          {
            required: true,
            message: "Please  valid available_quantity!",
          },
        ]}
      >
        <label>Available Quantity:</label>
        <br />
        <Input placeholder="available_quantity" />
      </Form.Item>

      <Form.Item name="image">
        <label>Image:</label>
        <br />
        <Upload
          name="logo"
          action="/upload.do"
          listType="picture"
          status="uploading"
        >
          <Button
            style={{ width: "650px", borderRadius: "10px"}}
            
            icon={<UploadOutlined  />}
          >
            Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="posted_date"
        rules={[
          {
            required: true,
            message: "Please input your posted_date",
          },
        ]}
      >
        <label>Posted date:</label>
        <br />
        <DatePicker style={{ width: "650px", borderRadius: "10px" }} />
      </Form.Item>
      <Form.Item
        name="expired_date"
        rules={[
          {
            required: true,
            message: "Please input your expired_date",
          },
        ]}
      >
        <label>Expired date:</label>
        <br />
        <DatePicker style={{ width: "650px", borderRadius: "10px" }} />
      </Form.Item>

      <Form.Item
        name=" price"
        rules={[
          {
            required: true,
            message: "Please input your  price",
          },
        ]}
      >
        <label>Price</label>
        <br />
        <Input placeholder="price" />
      </Form.Item>
      <Form.Item
        name="seller_phone"
        rules={[
          {
            required: true,
            message: "Please input your seller_phone",
          },
        ]}
      >
        <label>seller Phone</label>
        <br />
        <Input placeholder="seller_phone" />
      </Form.Item>

      <Button
        style={{ marginTop: "2%" }}
        className="register-form-button"
        htmlType="submit"
        onClick={() => {}}
      >
        post Product
      </Button>
    </Form>



      </Modal>


    </>
  );
};

export default AllProduct;
