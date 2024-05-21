// Header.tsx
import React from 'react';

import DefaultHeader from './default-header/default-header';

interface HeaderProps {
  pageName: string;
  blockName: string;
}
const Header: React.FC<HeaderProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 Header.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-header':
      return DefaultHeader(pageName, blockName);
  }
};
export default Header;
