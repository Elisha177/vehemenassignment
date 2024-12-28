import React, { useState } from 'react';
import Modal from 'react-modal';

// Set default styles for the modal
Modal.setAppElement('#root');

const NodeForm = ({ isOpen, onClose, onSubmit, defaultValues }) => {
  const [label, setLabel] = useState(defaultValues?.label || '');
  const [x, setX] = useState(defaultValues?.position?.x || 0);
  const [y, setY] = useState(defaultValues?.position?.y || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNode = {
      id: defaultValues?.id || `node-${Date.now()}`, // Unique ID for new node
      type: 'default',
      position: { x: parseFloat(x), y: parseFloat(y) },
      data: { label },
    };
    onSubmit(newNode);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Node Form"
      style={{
        content: {
          width: '400px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '10px',
        },
      }}
    >
      <h2>{defaultValues ? 'Edit Node' : 'Add Node'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Label:
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              style={{ width: '100%' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Position X:
            <input
              type="number"
              value={x}
              onChange={(e) => setX(e.target.value)}
              style={{ width: '100%' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Position Y:
            <input
              type="number"
              value={y}
              onChange={(e) => setY(e.target.value)}
              style={{ width: '100%' }}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginRight: '10px' }}>
          Save
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default NodeForm;
