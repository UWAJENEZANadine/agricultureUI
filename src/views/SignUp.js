import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomeLayout from "../components/homeLayout";
import { Form, Input, Button, Checkbox, Modal, Select } from "antd";
import { UserOutlined, LockOutlined,PhoneOutlined,InboxOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../css/SignUp.css";

const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const { Option } = Select;

  return (
    <HomeLayout>
      <Modal
        className="register-model-form"
        visible={visible}
        width="50%"
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
      >
        <h1>CREATE ACCOUNT</h1>
        <Form
          name="normal_register"
          className="register-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="firstName: "
            name="FirstName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input 
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="FirstName"
            />
          </Form.Item>
          <Form.Item
            label="lastName:"
            name="LastName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input 
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="LastName"
            />
          </Form.Item>
          <Form.Item
            label=" phone: "
            name=" phone"
            rules={[
              {
                required: true,
                message: "Please input valid phone",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined  className="site-form-item-icon" />}
              placeholder=" phone "
            />
          </Form.Item>
          <Form.Item
            label="email: "
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input valid phone",
              },
            ]}
          >
            <Input
              prefix={<InboxOutlined className="site-form-item-icon" />}
              placeholder="email "
            />
          </Form.Item>

          <Form.Item
            label="password:"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            label="gender:"
            name="gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
              <Option value="not-say">not-say</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="role:"
            name="role"
            rules={[{ required: true, message: "Please select your role" }]}
          >
            <Select placeholder="select your role">
              <Option value="admin">admin</Option>
              <Option value="buyer">buyer</Option>
              <Option value="seller">seller</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              create account
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HomeLayout>
  );
};

export default SignUp;

// firstName: String,
//     lastName: String,
//     phone: String,
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       default: "Rwanda",
//     },
//     gender: {
//       type: String,
//       enum: ["male", "female", "other", "not-say"],
//     },

//     role: {
//       type: String,
//       default: "buyer",
//       enum: ["admin", "buyer", "seller"],
