import { Layout } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";

const { Content } = Layout;

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/blog", element: <h2>Blog Page</h2> },
];

const MainContent = () => {
  return (
    <Content style={{ padding: "20px" }}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Content>
  );
};

export default MainContent;
