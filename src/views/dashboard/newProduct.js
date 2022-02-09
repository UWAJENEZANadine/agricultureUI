import React from "react"
import { Form, Input, DatePicker, Space, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./newProduct.css"



const NewProductPost= () => {
    const onFinish = (values) => {
        console.log(values);
    }


  return (
    <>
<div className="container-dash-img">
    <div className="dash-image">
     <img src="https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDU1Mjc5MHx8ZW58MHx8fHw%3D&w=1000&q=80" />
     </div>
     <div className="dash-form">
    <Form onFinish={onFinish} className="dash-form" >
      
      <Form.Item
        name="productname"
        label="Productname:"
        rules={[{ required: true }]}
      >
        <Input style={{width:"82%", marginLeft:"28px", boxShadow: "2px 3px 5.5px grey" }}/>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description:"
        rules={[{ required: true }]}
      >
        <Input.TextArea  style={{width:"81%", marginLeft:"41px", boxShadow: "2px 3px 5.5px grey" }}/>
      </Form.Item>

      <Form.Item
        name="availablequantity"
        label="Availablequantity:"
        rules={[{ required: true }]}
      >
        <Input style={{width:"89%", marginLeft:"5px", boxShadow: "2px 3px 5.5px grey" }}/>
      </Form.Item>
      <Space>
        <Form.Item name="posted_date" label="posted_date" rules={[{ required: true }]}>
          <DatePicker style={{width:"24em", marginLeft:"32px", boxShadow: "2px 3px 5.5px grey" }} />
        </Form.Item>
      </Space>
      <br />
      <Space>
        <Form.Item name="expired_date" label="Expired_date" rules={[{ required: true }]}>
          <DatePicker style={{width:"24em", marginLeft:"30px", boxShadow: "2px 3px 5.5px grey" }} />
        </Form.Item>
      </Space>
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <InputNumber  style={{width:"76%", marginLeft:"75px", boxShadow: "2px 3px 5.5px grey"  }} placeholder="......kg"  />
      </Form.Item>

      <Link to="/home">
        <Button htmlType="submit" type="primary">
          {" "}
          Register product
        </Button>
      </Link>
    </Form>
    </div>
    </div>
    </>
      
  )
}

export default NewProductPost;
