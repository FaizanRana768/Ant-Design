import { Layout } from 'antd';
import React from 'react'
const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <>
            <AntFooter style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </AntFooter>
        </>
    )
}

export default Footer
