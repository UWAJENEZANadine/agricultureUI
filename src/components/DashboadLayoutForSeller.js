import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./DashboadLayoutForSeller.css";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";


const { Header, Sider, Content } = Layout;

const DashLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="logo" /> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEC7KOCi__hsFKdu0R1GrjfjsEDFxHfagEw&usqp=CAU" style={{width:"60px", height:"60px", borderRadius:"30px", margin:"30px 10px 30px 15px"  }}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/dash/newProduct">create a product</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/dash/allProducts">Manage your allProducts</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UploadOutlined />}
            onClick={() => localStorage.removeItem("userLogedIn")}
          >
            <Link to="/home">Logout</Link >
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
                className: 'trigger',
                onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor:""
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
    
  )
}
export default DashLayout
