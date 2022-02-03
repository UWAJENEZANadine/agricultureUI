import React, {useState} from "react";
import HomeLayout from "../components/homeLayout";
import "antd/dist/antd.css";
import "../css/signin.css";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const onFinish = (values) => {
    console.log(values)
    localStorage.setItem("userLogedIn", true);
    navigate("/dash/newProduct");
  };
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  

  return (
    <HomeLayout>
      <div className="signUp-page">
       <Modal
        className="register-model-form"
        visible={visible}
        width="50%"
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
      >
      <div className="signin-container">
        <h1>Log in here please!</h1>
        <Form name="normal_login" className="login-form"  initialValues={{remember: true,}} onFinish={onFinish} >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Button htmlType="submit" onClick={() => {}}>
            Login
          </Button>
          Or <a href="./SignUp">register now!</a>
        </Form>
       
      </div>
      </Modal>
      </div>
    </HomeLayout>
  );
};

export default Signin;
