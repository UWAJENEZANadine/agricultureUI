import React from "react"
import { Form, Input, DatePicker, Space, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";

const NewProductPost= () => {
    const onFinish = (values) => {
        console.log(values);
    }


  return (
    <Form onFinish={onFinish} className="dash-form" >
      <Form.Item
        name="productname"
        label="productname:"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="description:"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="availablequantity"
        label="availablequantity:"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Space>
        <Form.Item name="date" label="date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
      </Space>
      <Form.Item name="price" label="price" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>

      <Link to="/home">
        <Button htmlType="submit" type="primary">
          {" "}
          Register product
        </Button>
      </Link>
    </Form>
  )
}

export default NewProductPost;
