// resume-header.tsx
import React from 'react';

function resumeHeader(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 resume-header.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default resumeHeader;
