import React from "react";
import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Header.css";  

const { Header: AntHeader } = Layout;

const Header = ({ isMobile, setSidebarVisible }) => {
  return (
    <AntHeader className="header">
      <div className="header-title">My Website</div>

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined className="menu-button" />}
          onClick={() => setSidebarVisible(true)}
        />
      )}
    </AntHeader>
  );
};

export default Header;
