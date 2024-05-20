import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import maakBlou from '../../../api/toolbox/maakBlou';
import maakGroen from '../../../api/toolbox/maakGroen';

import './index.scss';

const Body = () => {
  const eleName = 'my-ok';

  useEffect(() => {
    const test = document.getElementById(eleName) as HTMLDivElement | null;
    if (test) {
      maakBlou(test);
      maakGroen(test);
    } else {
      console.error(`Cannot find Element ${eleName}`);
    }
  }, [eleName]);

  return (
    <section id="my-ok" className={eleName}>
      <h1>OK!</h1>
    </section>
  );
};

ReactDOM.render(<Body />, document.getElementById('root'));
