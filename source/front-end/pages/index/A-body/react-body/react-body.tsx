import React from 'react';
import { randomizeItem } from '../../../../utilities/A-Body/A-Body';
const projectURI = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main';
const CORE_CONCEPTS = [
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/components.png`,
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/config.png`,
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/jsx-ui.png`,
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/state-mgmt.png`,
    title: 'State',
    description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

function Header() {
  return (
    <header>
      <img src={`${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/react-core-concepts.png`} alt="Meh" />
      <h1>React Essentials</h1>
      <p>{randomizeItem(['Fundemental', 'Crucial', 'Core'])} React concepts you will need for almost any app you are going to build.</p>
    </header>
  );
}

function reactBody(pageName: string | any, blockName: string | any) {
  const page: string = pageName;
  const block: string = blockName;

  console.log('//--|🠊 react-body.tsx loaded 🠈|--//');
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h3>Core Concepts</h3>
          <ul>
            <PropsConcept {...CORE_CONCEPTS[0]} />
            <PropsConcept {...CORE_CONCEPTS[1]} />
            <PropsConcept {...CORE_CONCEPTS[2]} />
            <PropsConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}
function PropsConcept(props: string | any) {
  // Props makes a function reusable
  return (
    <li>
      <img src={`${props.image}`} alt="..." />
      <h6>{props.title}</h6>
      <p>{props.description}</p>
    </li>
  );
}

export default reactBody;
