import React, { useState } from 'react';

const Sidebar = ({ addNode }) => {
  const [nodeName, setNodeName] = useState('');

  const handleAddNode = () => {
    if (nodeName) {
      addNode(nodeName);
      setNodeName('');
    }
  };

  return (
    <div style={{ padding: '10px', width: '200px', background: '#f4f4f4' }}>
      <h4>Sidebar</h4>
      <input
        type="text"
        placeholder="Node Label"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;
