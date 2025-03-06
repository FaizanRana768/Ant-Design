import React from "react";
import { Avatar, Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Header.css";
import avatarImg from '../../src/assets/1721731820291.jpg'
const { Header: AntHeader } = Layout;

const Header = ({ isMobile, setSidebarVisible }) => {
  return (
    <AntHeader className="header">
      <div className="header-title">
        <img src="/src/assets/b874caa9-4458-412a-9ac6-a61486180a62.svg" alt="logo-img" />
        <span>Official Website</span>
      </div>
      <div>
        <Avatar src={avatarImg} />
      </div>
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
