import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const { Content, Footer } = Layout;

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
      <Layout style={{ minHeight: "100vh" }}>
        <Header isMobile={isMobile} setSidebarVisible={setSidebarVisible} />
        <Layout hasSider>
          <Sidebar isMobile={isMobile} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
          <Layout style={{ flex: 1 }}>
            <Content style={{ padding: "20px", flex: 1 }}>
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
