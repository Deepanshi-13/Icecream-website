// src/components/ReusableModal.jsx
import React from 'react';
import { Modal } from 'antd';

const ReusableModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;


