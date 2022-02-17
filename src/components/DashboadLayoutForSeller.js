import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./DashboadLayoutForSeller.css";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  StarOutlined,
  UploadOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  BellOutlined, 
  SearchOutlined,
} from "@ant-design/icons";

import { Input } from "antd";

const { Header, Sider, Content } = Layout;

const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh" }}
      >
        {/* <div className="logo" /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEC7KOCi__hsFKdu0R1GrjfjsEDFxHfagEw&usqp=CAU"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            margin: "30px 10px 30px 15px",
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<StarOutlined />}>
            <Link style={{ textDecoration: "none" }} to="/dash/Overview">
              Overview
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link style={{ textDecoration: "none" }} to="/dash/newProduct">
              create a product
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />}>
            <Link style={{ textDecoration: "none" }} to="/dash/allProducts">
              Manage your allProducts
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
            <Link style={{ textDecoration: "none" }} to="/dash/allorder">
              {" "}
              Orders
            </Link>
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<UploadOutlined />}
            onClick={() => localStorage.removeItem("userLogedIn")}
          >
            <Link style={{ textDecoration: "none" }} to="/home">
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            height: "25vh",
            backgroundColor: "rgb(75, 39, 3)",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,

            {
              className: "trigger",
              onClick: toggle,
            }
          )}

          <div className="navbar1">
            <div className="title">
              <h2>Dashboard</h2>
              <span>Detailed information about your store</span>
            </div>

            <div className="container">
              <Input
                prefix={<SearchOutlined style={{color:"white"}}  />}
                placeholder="search here...."
             style={{width:"40%", marginLeft:"150px", backgroundColor:"black", borderRadius:"30px" }} />
             <BellOutlined style={{fontSize:"2em", marginLeft:"10px", color:"white"}}/>
            </div>
          </div>

        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashLayout;
