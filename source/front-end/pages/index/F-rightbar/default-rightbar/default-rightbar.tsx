// default-rightbar.tsx
import React from 'react';

function DefaultRightbar(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-rightbar.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default DefaultRightbar;
