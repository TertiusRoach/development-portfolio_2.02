import React from 'react';
import { useRef, useEffect, useState } from 'react';
interface SkillsProps {
  jobTitle: 'developing' | 'producing';
}
function MainSkills() {
  const Aside: React.FC<SkillsProps> = ({ jobTitle }) => {
    let Nav: React.FC<SkillsProps> = ({ jobTitle }) => {
      return (
        <nav className={`${jobTitle}-navigation`}>
          <button className={`${jobTitle}-left`}>
            <img src={leftImageURI} alt="Left" />
          </button>
          <article>
            <h4>{jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}</h4>
          </article>

          <button className={`${jobTitle}-right`}>
            <img src={rightImageURI} alt="Right" />
          </button>
        </nav>
      );
    };
    let Menu: React.FC<SkillsProps> = ({ jobTitle }) => {
      //--|🠊 Separate Sections 🠈|--//
      /*
        let skillSection: Array<string>;
        try {
          // Set skillSection based on jobTitle
          if (jobTitle === 'developing') {
            skillSection = ['languages', 'utilities', 'databases'];
          } else if (jobTitle === 'producing') {
            skillSection = ['design', 'editing', 'admin']; // Add other sections as needed
          } else {
            throw new Error('//--|🠊 Broken! resume-main.tsx 🠈|--//');
          }
        } catch (error) {
          console.log('//--|🠊 Broken! resume-main.tsx 🠈|--//');
          // Handle error or log it
        }
        */

      //--|🠋 Separate Developer and Producer: Switch Cases? 🠋|--//
      var Article: React.FC<SkillsProps> = ({ jobTitle }) => {
        const selectedArticle = useRef<HTMLElement>(null);
        const [getWidth, setWidth] = useState<number>(0);
        useEffect(() => {
          if (selectedArticle.current) {
            setWidth(selectedArticle.current.offsetWidth);
          }
        }, []);

        var section: Array<string>;
        switch (jobTitle) {
          case 'developing':
            section = ['languages', 'utilities', 'databases'];
            break;
          case 'producing':
            section = ['design', 'editing', 'admin'];
            break;
        }
        console.log(section);

        return (
          <>
            {/* //--| To be Continued |--// */}
            <article
              ref={selectedArticle}
              // The solution lies here. Maybe a for() loop?
              id={`${section[0]}-skills`}
              className={`${jobTitle}-article`}
              style={{ right: `-${getWidth * 0}px` }}
            >
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
            </article>
            <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 1}px` }}>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
            </article>
            <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 2}px` }}>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
              <li>
                <img src={leftClick} alt="..." />
              </li>
            </article>
          </>
        );
      };
      //--|🠉 Separate Developer and Producer: Switch Cases? 🠉|--//
      var Span = () => {
        return (
          <span>
            <img src={leftClick} alt="..." />
          </span>
        );
      };

      return (
        <menu className={`${jobTitle}-carousel`}>
          <Article jobTitle={`${jobTitle}`} />
          <Span />
        </menu>
      );
    };
    let Details: React.FC<SkillsProps> = ({ jobTitle }) => {
      return (
        <details>
          {/* //--| Design details tag |--// */}
          <h1>Title</h1>
          <h3>{`${jobTitle}`}</h3>
          <p>Description</p>
        </details>
      );
    };

    return (
      <aside id={`${jobTitle}-skills`} className="collapsed">
        <Nav jobTitle={`${jobTitle}`} />
        <Menu jobTitle={`${jobTitle}`} />
        <Details jobTitle={`${jobTitle}`} />
      </aside>
    );
  };

  let leftImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-left.svg`;
  let rightImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-right.svg`;
  let leftClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-left-click.svg`;
  let rightClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-right-click.svg`;

  return (
    <section id="main-skills">
      <div className="margin-main">
        <Aside jobTitle="developing" />
        <Aside jobTitle="producing" />
      </div>
    </section>
  );
}
export default MainSkills;
