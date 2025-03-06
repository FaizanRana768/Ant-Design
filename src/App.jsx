import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  PhoneOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "antd/dist/reset.css";

const { Header, Content, Footer, Sider } = Layout;

const sidebarMenuItems = [
  { key: "1", icon: <HomeOutlined />, label: "Home", path: "/" },
  { key: "2", icon: <InfoCircleOutlined />, label: "About", path: "/about" },
  { key: "3", icon: <PictureOutlined />, label: "Gallery", path: "/gallery" },
  { key: "4", icon: <PhoneOutlined />, label: "Contact", path: "/contact" },
  { key: "5", icon: <ReadOutlined />, label: "Blog", path: "/blog" },
].map((item) => ({
  key: item.key,
  icon: item.icon,
  label: <Link to={item.path}>{item.label}</Link>,
}));

const App = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            padding: "0 20px",
            background: "#001529",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white", fontSize: "20px" }}>My Website</div>
        </Header>

        <Layout>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => console.log(broken)}
            onCollapse={(collapsed, type) => console.log(collapsed, type)}
            style={{ padding: "20px 0px" }}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={sidebarMenuItems}
            />
          </Sider>
          <Layout>
            <Content style={{ padding: "20px" }}>
              <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/about" element={<h2>About Page</h2>} />
                <Route path="/gallery" element={<h2>Gallery Page</h2>} />
                <Route path="/contact" element={<h2>Contact Page</h2>} />
                <Route path="/blog" element={<h2>Blog Page</h2>} />
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
