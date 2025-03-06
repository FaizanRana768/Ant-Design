import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WebFooter from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import { useResponsive } from "./hooks/responsiveHook";

const App = () => {

  const { Content } = Layout;
  const { isMobile, sidebarVisible, setSidebarVisible } = useResponsive();
  const routes = useMemo(
    () => [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/blog", element: <Blog /> },
    ],
    []
  );

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
            <Content style={{ padding: "20px" }}>
              <Routes>
                {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Content>
            <WebFooter />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
