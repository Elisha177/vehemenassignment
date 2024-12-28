import React, { useState } from 'react';
import ReactFlow, { Background, Controls, addEdge } from "@xyflow/react";
import Sidebar from './Sidebar';

const Diagram = ({ metadata }) => {
  const [elements, setElements] = useState([...metadata.nodes, ...metadata.edges]);
  const [nodeId, setNodeId] = useState(3);

  const onElementsRemove = (elementsToRemove) => {
    setElements((eds) => eds.filter((ed) => !elementsToRemove.includes(ed)));
  };

  const onConnect = (connection) => {
    setElements((eds) => addEdge(connection, eds));
  };

  const addNode = (label) => {
    const newNode = {
      id: `${nodeId}`,
      type: 'default',
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { label },
    };
    setElements((eds) => [...eds, newNode]);
    setNodeId(nodeId + 1);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar addNode={addNode} />
      <div style={{ flex: 1, height: '100%' }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Diagram;
