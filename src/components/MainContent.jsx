import { Layout } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";

const { Content } = Layout;

const MainContent = () => {
  return (
    <Content style={{ padding: "20px", flexGrow: 1, backgroundColor: "#f0f2f5" }}>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/gallery" element={<h2>Gallery Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
        <Route path="/blog" element={<h2>Blog Page</h2>} />
      </Routes>
    </Content>
  );
};

export default MainContent;
