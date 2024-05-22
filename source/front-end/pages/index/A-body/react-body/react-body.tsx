import React from 'react';

function reactBody(pageName: string | any, blockName: string | any) {
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

export default reactBody;
