import { Link } from "react-router-dom";
import {HomeOutlined,InfoCircleOutlined,PictureOutlined,PhoneOutlined,ReadOutlined} from "@ant-design/icons";
export const sidebarMenuItems = [
    { key: "1", icon: <HomeOutlined />, label: "Home", path: "/" },
    { key: "2", icon: <InfoCircleOutlined />, label: "About", path: "/about" },
    { key: "3", icon: <PictureOutlined />, label: "Gallery", path: "/gallery" },
    { key: "4", icon: <PhoneOutlined />, label: "Contact", path: "/contact" },
    { key: "5", icon: <ReadOutlined />, label: "Blog", path: "/blog" },
].map((item) => ({
    key: item.key,
    icon: item.icon,
    label: <Link to={item.path}>{item.label}</Link>,
}));
