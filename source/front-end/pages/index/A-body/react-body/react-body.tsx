import React from 'react';

function Header() {
  let projectURI = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main';
  console.log('//--|🠊 Optional: react-body.tsx loaded 🠈|--//');
  return (
    <header>
      <img src={`${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/react-core-concepts.png`} alt="Meh" />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts you will need for almost any app you are going to build.</p>
    </header>
  );
}

function reactBody(pageName: string | any, blockName: string | any) {
  const page: string = pageName;
  const block: string = blockName;

  return (
    <>
      <Header />
      {/* <Heads pageName={`${pageName}-overlay`} /> */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default reactBody;
