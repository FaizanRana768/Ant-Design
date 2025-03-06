import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "antd/dist/reset.css";

const { Header, Content, Footer, Sider } = Layout;

const sidebarMenuItems = [
  { key: "1", icon: <UserOutlined />, label: "User" },
  { key: "2", icon: <VideoCameraOutlined />, label: "Video" },
  { key: "3", icon: <UploadOutlined />, label: "Upload" },
].map((item) => ({
  key: item.key,
  icon: item.icon,
  label: <Link to={`/nav${item.key}`}>{item.label}</Link>,
}));

const headerMenuItems = [
  { key: "about", label: <Link to="/about">About</Link> },
  { key: "gallery", label: <Link to="/gallery">Gallery</Link> },
  { key: "contact", label: <Link to="/contact">Contact Us</Link> },
  { key: "blog", label: <Link to="/blog">Blog</Link> },
];

const App = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ padding: "0 20px", background: "#001529", display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, fontSize: "18px", fontWeight: "bold" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Company Logo
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" items={headerMenuItems} style={{ background: "transparent" }} />
        </Header>

        <Layout>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => console.log(broken)}
            onCollapse={(collapsed, type) => console.log(collapsed, type)}
            style={{ padding: "20px 0px" }}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={sidebarMenuItems} />
          </Sider>
          <Layout>
            <Content style={{ padding: "20px" }}>
              <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/about" element={<h2>About Page</h2>} />
                <Route path="/gallery" element={<h2>Gallery Page</h2>} />
                <Route path="/contact" element={<h2>Contact Page</h2>} />
                <Route path="/blog" element={<h2>Blog Page</h2>} />
                <Route path="/nav1" element={<h2>User Section</h2>} />
                <Route path="/nav2" element={<h2>Video Section</h2>} />
                <Route path="/nav3" element={<h2>Upload Section</h2>} />
              </Routes>

              <Button type="dashed" loading>
                Click Me
              </Button>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
