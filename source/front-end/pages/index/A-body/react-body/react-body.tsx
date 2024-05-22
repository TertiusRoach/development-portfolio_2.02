import React from 'react';
const projectURI = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main';

function CoreConcept(props: string | any) {
  let reactImages = ['components.png', 'config.png', 'jsx-ui.png', 'state-mgmt.png'];
  let imageURI = `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/${props.image}.png`;

  return (
    <li>
      <img src={`${imageURI}`} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
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
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block" image="components" />
            <CoreConcept title="Props" description="The core UI building block" image="config" />
            <CoreConcept title="{2}" description="The core UI building block" image="jsx-ui" />
            <CoreConcept title="{3}" description="The core UI building block" image="state-mgmt" />
          </ul>
        </section>
      </main>
    </>
  );
}

function randomizeItem(array: Array<string>) {
  const items = array;
  const max: number = items.length;
  const randomize = Math.floor(Math.random() * (max + 1));

  return items[randomize];
}

function Header() {
  console.log('//--|🠊 Optional: react-body.tsx loaded 🠈|--//');
  return (
    <header>
      <img src={`${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/react-core-concepts.png`} alt="Meh" />
      <h1>React Essentials</h1>
      <p>{randomizeItem(['Fundemental', 'Crucial', 'Core'])} React concepts you will need for almost any app you are going to build.</p>
    </header>
  );
}

export default reactBody;
