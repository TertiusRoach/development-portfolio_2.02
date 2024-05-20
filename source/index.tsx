import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import maakBlou from './api/toolbox/maakBlou';
import maakGroen from './api/toolbox/maakGroen';
import './index.scss';

const Body = () => {
  const eleName = 'my-ok';
  const test = document.getElementById(eleName) as HTMLHeadElement | null;

  // useEffect(() => {
  //   if (test) {
  //     maakBlou(test);
  //     maakGroen(test);
  //   } else {
  //     console.error(`Cannot find Element ${eleName}`);
  //   }
  // }, []);

  return (
    <section id="my-ok" className={eleName}>
      <h1>OK!</h1>
    </section>
  );
};

ReactDOM.render(<Body />, document.getElementById('root'));

function Main(): void {
  const eleName = `my-ok`;
  // Sending Test
  const test = document.getElementById(eleName) as HTMLHeadElement | null;
  if (test) {
    maakBlou(test);
    maakGroen(test);
  } else {
    throw new Error(`Cannot find Element ${eleName}`);
  }
}
try {
  Main();
} catch (err) {
  if (err instanceof Error) {
    alert(err.message);
  }
}
