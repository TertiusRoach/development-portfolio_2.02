// resume-main.tsx
import $ from 'jquery';
import React from 'react';
import Main from '../Main';
import { useRef, useEffect, useState } from 'react';

function resumeMain(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 resume-main.tsx loaded 🠈|--//');

  return (
    <>
      <article className="scalable-main">
        <MainHome />
        <MainSkills />
        <MainContact />
      </article>
    </>
  );
}

function MainHome() {
  const jobTitle: Array<string> = ['Multimedia Programmer'];
  const profilePicture: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/front-end/pages/index/%7Econtent/png-files/profile-picture.png`;
  return (
    <section id="main-home">
      <div className="margin-main">
        <aside id="home-cover">
          <header className="home-header">
            <h1 className="job-title" data-text={jobTitle[0]}>
              {jobTitle[0]}
            </h1>
            <h3>Development Portfolio</h3>
          </header>

          <menu className="home-buttons">
            <button className="my-career">
              <a>
                <h6>My Career</h6>
              </a>
            </button>
            <button className="contact-me">
              <a href="#main-contact">
                <h6>Contact Me</h6>
              </a>
            </button>
          </menu>

          <p className="home-description">
            As a full-stack developer, my focus is on building websites, animations, and applications designed to captivate
            users from the first click. By blending creativity with technical expertise, I aim to create standout projects
            that strive to make our lives easier. There's a genuine passion within me to experiment with new tools and stay
            updated with multimedia technologies, allowing me to bring fresh and innovative solutions to each project. I'm
            eager to collaborate with fellow creatives, employers, and enthusiasts to turn concepts into impactful, enduring
            applications. While lacking a traditional CS degree, my unique perspective undoubtedly adds value. I thrive in
            environments conducive to exploring new tools with clear goals, and my passion lies in partnering with visionary
            creatives to transform concepts into digital masterpieces. Through hands-on experience and a continuous learning
            journey, my arsenal of skills can deliver exceptional results to anyone seeking my services, whether permanent or
            contract-based.
          </p>
          <div className="mid-ground"></div>
        </aside>
        <aside id="home-profile">
          <img src={profilePicture} alt="Profile Picture" />
        </aside>
      </div>
    </section>
  );
}
function MainSkills() {
  const leftImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-left.svg`;
  const rightImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-right.svg`;
  const leftClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-left-click.svg`;
  const rightClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-right-click.svg`;

  const Aside: React.FC<SkillsProps> = ({ jobTitle }) => {
    return (
      <aside id={`${jobTitle}-skills`} className="collapsed">
        <Nav jobTitle={`${jobTitle}`}></Nav>
        <Menu jobTitle={`${jobTitle}`} />
        <Details jobTitle={`${jobTitle}`} />
      </aside>
    );
  };

  const Nav: React.FC<SkillsProps> = ({ jobTitle }) => {
    return (
      <nav className={`${jobTitle}-navigation`}>
        <button className={`${jobTitle}-left`}>
          <img src={leftImageURI} alt="Left" />
        </button>
        <h4>{jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}</h4>
        <button className={`${jobTitle}-right`}>
          <img src={rightImageURI} alt="Right" />
        </button>
      </nav>
    );
  };

  const Menu: React.FC<SkillsProps> = ({ jobTitle }) => {
    let Articles: React.FC<SkillsProps> = ({ jobTitle }) => {
      const reference = useRef<HTMLElement>(null);
      const [getWidth, setWidth] = useState<number>(0);
      useEffect(() => {
        if (reference.current) {
          setWidth(reference.current.offsetWidth);
        }
      }, []);
      return (
        <>
          <article ref={reference} className={`${jobTitle}-items`} id="languages-article">
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
          </article>
          <article style={{ right: `-${getWidth * 1}px` }} className={`${jobTitle}-items`} id="utilities-article">
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
          </article>
          <article style={{ right: `-${getWidth * 2}px` }} className={`${jobTitle}-items`} id="databases-article">
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
            <li>{/* <img src={leftClick} alt="..." /> */}</li>
          </article>
        </>
      );
    };

    let Span = () => {
      return (
        <span>
          <img src={leftClick} alt="..." />
        </span>
      );
    };

    return (
      <menu className={`${jobTitle}-carousel`}>
        <Articles jobTitle={`${jobTitle}`} />
        <Span />
      </menu>
    );
  };

  const Details: React.FC<SkillsProps> = ({ jobTitle }) => {
    return (
      <details>
        <h1>Title</h1>
        <h3>{`${jobTitle}`}</h3>
        <p>Description</p>
      </details>
    );
  };

  return (
    <section id="main-skills">
      <div className="margin-main">
        <Aside jobTitle="developing" />
        {/* <Carousel jobTitle="producing" /> */}
      </div>
    </section>
  );
}
function MainContact() {
  return (
    <section id="main-contact">
      <div className="margin-main">
        <aside id="contact-form">
          <h1>Contact</h1>
        </aside>
      </div>
    </section>
  );
}

interface MainProps {}
interface SkillsProps {
  jobTitle: 'developing' | 'producing' | string;
}
interface ContactProps {}

export default resumeMain;

$(function () {
  const carouselSelector = '#developing-skills .developing-carousel article';
  const devLeftSelector = '#developing-skills .developing-navigation button[class*="left"] img';
  const devRightSelector = '#developing-skills .developing-navigation button[class*="right"] img';

  const $carouselItems = $(carouselSelector);

  const $devLeftButton = $(devLeftSelector).parent();
  const $devRightButton = $(devRightSelector).parent();

  const totalItems = $carouselItems.length;
  const itemWidth = $carouselItems.first().width() || 0;

  $devRightButton.on('click', () => {
    if (currentIndex < totalItems - 1) scrollToIndex(currentIndex + 1);
  });

  $devLeftButton.on('click', () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  });

  let currentIndex = 0;

  const updateNavigation = () => {
    $devLeftButton.toggleClass('disabled', currentIndex === 0).toggleClass('enabled', currentIndex > 0);
    $devRightButton
      .toggleClass('disabled', currentIndex === totalItems - 1)
      .toggleClass('enabled', currentIndex < totalItems - 1);
  };

  const updateMenu = (newIndex: number) => {
    $carouselItems.removeClass('visible hidden').each(function (index) {
      $(this)
        .toggleClass('visible', index === newIndex)
        .toggleClass('hidden', index !== newIndex);
    });
  };

  const scrollToIndex = (newIndex: number) => {
    const direction = newIndex > currentIndex ? '+=' : '-=';
    $carouselItems.animate({ right: `${direction}${itemWidth}px` }, 500);
    currentIndex = newIndex;
    updateMenu(currentIndex);
    updateNavigation();
  };

  const skillDetails: string = '#developing-skills details';
  const tutorialSpan: string = '#developing-skills menu span';
  $(tutorialSpan).on('click', () => {
    $('#developing-skills menu span').css('display', 'none');
    $('#developing-skills').toggleClass('collapsed expanded');
  });
  $(skillDetails).on('click', () => {
    $('#developing-skills menu span').css('display', 'flex');
    $('#developing-skills').toggleClass('expanded collapsed');
  });

  updateMenu(currentIndex);
  updateNavigation();
});
