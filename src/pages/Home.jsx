import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h3>Home</h3>
      <Button type="primary" onClick={showModal}>Click Me</Button>
      <Modal title="Modal Title" open={isModalVisible} onCancel={handleCancel} footer={null}>
        <p>Modal content goes here...</p>
      </Modal>
    </div>
  );
};

export default Home;
