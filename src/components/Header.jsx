import React from "react";
import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = ({ isMobile, setSidebarVisible }) => {
  return (
    <AntHeader
      style={{
        padding: "0 20px",
        background: "#001529",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ color: "white", fontSize: "20px" }}>My Website</div>

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "20px", color: "white" }} />}
          onClick={() => setSidebarVisible(true)}
        />
      )}
    </AntHeader>
  );
};

export default Header;
