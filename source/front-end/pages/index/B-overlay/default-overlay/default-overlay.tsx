// default-overlay.tsx
import React from 'react';
function DefaultOverlay(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-overlay.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}

export default DefaultOverlay;
