import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WebFooter from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 668);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 668);
      if (window.innerWidth > 668) {
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
        <Layout>
          <Sidebar
            isMobile={isMobile}
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
          />
          <Layout style={{ flex: 1 }}>
            <MainContent />
            <WebFooter />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
