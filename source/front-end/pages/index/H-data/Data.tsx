// Overlay.tsx
import React from 'react';
import DefaultData from './default-data/default-data';

interface DataProps {
  pageName: string;
  blockName: string;
}
const Data: React.FC<DataProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 Data.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-data':
      return DefaultData(pageName, blockName);
  }
};
export default Data;
