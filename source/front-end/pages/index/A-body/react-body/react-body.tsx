import React from 'react';

export function ReactBody(pageName: any, blockName: any) {
  const page: string = pageName;
  const block: string = blockName;
  console.log('//--|🠊 Optional: react-body.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
