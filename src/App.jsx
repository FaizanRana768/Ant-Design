import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "antd/dist/reset.css";

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [UserOutlined, VideoCameraOutlined, UploadOutlined].map(
  (Icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(Icon),
    label: `Nav ${index + 1}`,
  })
);

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ padding: 0, background: "#001529", display: "flex", alignItems: "center" }}>
       
      </Header>
      <Layout>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => console.log(broken)}
          onCollapse={(collapsed, type) => console.log(collapsed, type)}
          style={{ padding: "20px 0px" }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
        </Sider>
        <Layout>
          <Content style={{ padding: "20px" }}>
            Content
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
  );
};

export default App;
