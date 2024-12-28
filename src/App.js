import React from 'react';
import Diagram from './components/Diagram';
import { sampleMetadata } from './utils/metadataSchema';

function App() {
  return (
    <div>
      <Diagram metadata={sampleMetadata} />
    </div>
  );
}

export default App;
