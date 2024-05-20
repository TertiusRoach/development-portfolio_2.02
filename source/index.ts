import maakBlou from './api/toolbox/maakBlou';
import maakGroen from './api/toolbox/maakGroen';
import './index.scss';

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
