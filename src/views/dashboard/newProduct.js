import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Space,
  InputNumber,
  Button,
  Upload,
} from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./newProduct.css";

const NewProductPost = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
  
        <div className="dash-form">
          <Form onFinish={onFinish} className="dash-form">
            <h1 style={{height:"70px"}} >Post your product by filling this form</h1>
            <Form.Item name="title" rules={[{ required: true }]}>
              <Input placeholder="type Productname" />
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true }]}>
              <Input.TextArea placeholder="type Description" />
            </Form.Item>

            <Form.Item name="available_quantity" rules={[{ required: true }]}>
              <Input placeholder="type Availablequantity" />
            </Form.Item>
            <Form.Item
              name="Image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true }]}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />} style={{width:"815px"}} >Click to upload</Button>
              </Upload>
            </Form.Item>

            <Space>
              <Form.Item name="posted_date" rules={[{ required: true }]}>
                <DatePicker placeholder="posted_date" />
              </Form.Item>
            </Space>
            <Space>

            <Form.Item name="expired_date" rules={[{ required: true }]}>
              <DatePicker placeholder="expired_date" />
            </Form.Item>
            </Space>
            <Form.Item name="price" rules={[{ required: true }]}>
              <Input placeholder="type price" />
            </Form.Item>
            

            <Form.Item name="seller_phone" rules={[{ required: true }]}>
              <Input placeholder=" type phone" />
            </Form.Item>

            <Link to="/home">
              <Button htmlType="submit" type="primary">
                {" "}
                Register product
              </Button>
            </Link>
          </Form>
        </div>

    </>
  );
};

export default NewProductPost;
