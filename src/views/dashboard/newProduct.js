import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import agricultureProductApis from "../../services/agricultureProductApis";
import "./newProduct.css";
const NewProductPost = () => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("received values", values);
    agricultureProductApis.postProduct(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 201) {
        return notification.success({
          message: "your account has been created",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
  };

  return (
    <Form
      name="normal_register"
      className="register-form-product"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{ fontStyle: "oblique", fontFamily: "serif" }}>
        
      </h1>
      <Form.Item
        name="ProductName"
        rules={[
          {
            // required: true,
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
            // required: true,
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
            // required: true,
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
            // required: true,
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
            // required: true,
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
            // required: true,
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
            // required: true,
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
        edit
      </Button>
    </Form>
  );
};

export default NewProductPost;

// ProductName: String,
//     description: String,
//     available_quantity: String,
//     // image: [
//     //   {
//     //     type: String,
//     //   },
//     // ],
//     posted_date: String,
//     expired_date: String,
//     price: String,
//     seller_phone: String,
