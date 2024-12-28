export const sampleMetadata = {
    nodes: [
      { id: '1', type: 'input', position: { x: 100, y: 100 }, data: { label: 'Input Node' } },
      { id: '2', type: 'default', position: { x: 200, y: 200 }, data: { label: 'Default Node' } }
    ],
    edges: [{ id: 'e1-2', source: '1', target: '2', type: 'default' }],
  };
  