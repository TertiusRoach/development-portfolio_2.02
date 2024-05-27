// resume-main.tsx
import React from 'react';

function resumeMain(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 resume-main.tsx loaded 🠈|--//');
  return (
    <>
      <div>
        <section className="main-home">
          <h1>Home</h1>
        </section>
        <section className="main-skills">
          <h1>Skills</h1>
        </section>
        <section className="main-contact">
          <h1>Contact</h1>
        </section>
      </div>
    </>
  );
}
export default resumeMain;
