// Overlay.tsx
import React from 'react';
import DefaultOverlay from './default-overlay/default-overlay';

interface OverlayProps {
  pageName: string;
  blockName: string;
}
const Overlay: React.FC<OverlayProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 Overlay.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-overlay':
      return DefaultOverlay(pageName, blockName);
  }
};
export default Overlay;
