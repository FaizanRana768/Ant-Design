import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "antd/dist/reset.css";
import Header from "./components/Header";
import { sidebarMenuItems } from "./utils/constant";

const { Content, Footer, Sider } = Layout;

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Layout>
        <Header isMobile={isMobile} setSidebarVisible={setSidebarVisible} />
        <Layout>
          <Sider
            style={{
              position: isMobile ? "fixed" : "relative",
              left: sidebarVisible || !isMobile ? 0 : "-100%",
              top: 0,
              height: "100vh",
              zIndex: 1000,
              width: isMobile ? "100%" : 250,
              transition: "left 0.3s ease-in-out",
            }}
            theme="dark"
          >
            {isMobile && (
              <div style={{ textAlign: "right", padding: "10px" }}>
                <Button
                  type="text"
                  icon={<CloseOutlined style={{ fontSize: "20px", color: "white" }} />}
                  onClick={() => setSidebarVisible(false)}
                />
              </div>
            )}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={sidebarMenuItems} />
          </Sider>
          <Layout>
            <Content style={{ padding: "20px", transition: "margin-left 0.3s ease-in-out" }}>
              <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/about" element={<h2>About Page</h2>} />
                <Route path="/gallery" element={<h2>Gallery Page</h2>} />
                <Route path="/contact" element={<h2>Contact Page</h2>} />
                <Route path="/blog" element={<h2>Blog Page</h2>} />
              </Routes>
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
