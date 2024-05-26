// resume-header.tsx
import React from 'react';

function resumeHeader(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 resume-header.tsx loaded 🠈|--//');
  return (
    <>
      <aside>
        <img
          src="source/front-end/pages/resume/~content/svg-files/signature-adjacent/primary-light.svg"
          alt="Résumé Logo"
        />
      </aside>
      <aside>
        {/* <button>
          <svg></svg>
          <h6>Button</h6>
        </button> */}
      </aside>
    </>
  );
}
export default resumeHeader;
