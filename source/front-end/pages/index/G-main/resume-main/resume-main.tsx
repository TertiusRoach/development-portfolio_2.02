// resume-main.tsx
import React from 'react';

function resumeMain(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 resume-main.tsx loaded 🠈|--//');
  return (
    <>
      <article className="scalable-main">
        <section className="main-home">
          <div className="margin-main">
            <h1>Home</h1>
          </div>
        </section>
        <section className="main-skills">
          <div className="margin-main">
            <h1>Skills</h1>
          </div>
        </section>
        <section className="main-contact">
          <div className="margin-main">
            <h1>Contact</h1>
          </div>
        </section>
      </article>
    </>
  );
}
export default resumeMain;
