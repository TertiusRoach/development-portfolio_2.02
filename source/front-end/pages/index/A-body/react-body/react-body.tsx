import React from 'react';
import { useState } from 'react';

import {
  randomizeItem,
  TabButton,
} from '../../../../utilities/A-Body/Body';

const projectURI =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main';

let CORE_CONCEPTS: Array<any> = [
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/components.png`,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/config.png`,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/jsx-ui.png`,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/state-mgmt.png`,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
let EXAMPLES: Object | any = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
          function Welcome() {
            return <h1>Hello, World!</h1>;
          }`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
          <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
          </div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
          function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
          function Counter() {
            const [isVisible, setIsVisible] = useState(false);

            function handleClick() {
              setIsVisible(true);
            }

            return (
              <div>
                <button onClick={handleClick}>Show Details</button>
                {isVisible && <p>Amazing details!</p>}
              </div>
            );
          }`,
  },
};

function reactBody(pageName: string | any, blockName: string | any) {
  const page: string = pageName;
  const block: string = blockName;
  // useState is a tool in React that helps components remember and manage information on their own.
  const [currentTopic, setSelectedTopic]: Array<any> = useState('');
  let tabContent = <p>Please select a topic.</p>;
  if (currentTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentTopic].title}</h3>
        <p>{EXAMPLES[currentTopic].description}</p>
        <pre>
          <code>{EXAMPLES[currentTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
    let tabContent: string = 'Please click a button';
    const capitalizedString =
      selectedButton.charAt(0).toUpperCase() + selectedButton.slice(1);

    console.log(`//--| ${capitalizedString} Selected |--//`);
    tabContent = selectedButton;
  }
  // console.log('//--|🠊 react-body.tsx loaded 🠈|--//');
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h3>Core Concepts</h3>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={currentTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={currentTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={currentTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={currentTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </>
  );
}

function Header() {
  return (
    <header>
      <img
        src={`${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/react-core-concepts.png`}
        alt="Meh"
      />
      <h1>React Essentials</h1>
      <p>
        {randomizeItem(['Fundemental', 'Crucial', 'Core'])} React concepts
        you will need for almost any app you are going to build.
      </p>
    </header>
  );
}

function CoreConcept(props: string | any) {
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
