// Body.tsx
import React from 'react';
import Overlay from '../B-overlay/Overlay';
import Header from '../C-header/Header';
import Footer from '../D-footer/Footer';
import Leftbar from '../E-leftbar/Leftbar';
import Rightbar from '../F-rightbar/Rightbar';
import Main from '../G-main/Main';
import Data from '../H-data/Data';

interface BodyProps {
  pageName: string;
  blockName: string;
}

const Body: React.FC<BodyProps> = ({ pageName, blockName }) => {
  const block = blockName.split('-')[0];
  console.log('//--|🠊 Body.tsx Detected 🠈|--//');
  return (
    <>
      <section id={`${pageName}-overlay`} className={`${block}-overlay`}>
        <Overlay pageName={`${pageName}-overlay`} blockName={`${block}-overlay`} />
      </section>

      <header id={`${pageName}-header`} className={`${block}-header`}>
        <Header pageName={`${pageName}-header`} blockName={`${block}-header`} />
      </header>

      <footer id={`${pageName}-footer`} className={`${block}-footer`}>
        <Footer pageName={`${pageName}-footer`} blockName={`${block}-footer`} />
      </footer>

      <aside id={`${pageName}-leftbar`} className={`${block}-leftbar`}>
        <Leftbar pageName={`${pageName}-leftbar`} blockName={`${block}-leftbar`} />
      </aside>

      <aside id={`${pageName}-rightbar`} className={`${block}-rightbar`}>
        <Rightbar pageName={`${pageName}-rightbar`} blockName={`${block}-rightbar`} />
      </aside>

      <main id={`${pageName}-main`} className={`${block}-main`}>
        <Main pageName={`${pageName}-main`} blockName={`${block}-main`} />
      </main>

      <script id={`${pageName}-data`} className={`${block}-data`}>
        <Data pageName={`${pageName}-data`} blockName={`${block}-data`} />
      </script>
    </>
  );
};

export default Body;
