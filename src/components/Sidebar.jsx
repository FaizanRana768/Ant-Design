import React from "react";
import { Layout, Menu, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { sidebarMenuItems } from "../utils/constant"; 

const { Sider } = Layout;

const Sidebar = ({ isMobile, sidebarVisible, setSidebarVisible }) => {
    return (
        <Sider
            style={{
                position: isMobile ? "fixed" : "relative",
                left: sidebarVisible || !isMobile ? 0 : "-100%",
                top: 0,
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
    );
};

export default Sidebar;
