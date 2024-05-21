// Footer.tsx
import React from 'react';
import DefaultFooter from './default-footer/default-footer';

interface FooterProps {
  pageName: string;
  blockName: string;
}
const Footer: React.FC<FooterProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 Footer.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-footer':
      return DefaultFooter(pageName, blockName);
  }
};
export default Footer;
