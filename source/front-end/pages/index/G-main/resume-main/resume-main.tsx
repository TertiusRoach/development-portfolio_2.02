// resume-main.tsx
import $ from 'jquery';
import React from 'react';
import Main from '../Main';
import { useRef, useEffect, useState } from 'react';

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
          <h4>{jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}</h4>
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

        return (
          <>
            <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 0}px` }} ref={selectedArticle}>
              {/* //--| To be Continued |--// */}
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
            <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 1}px` }}>
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
            <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 2}px` }}>
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
export default resumeMain;

$(function () {
  // Take this correct code...
  const producingSpan: string = '#producing-skills menu span';
  const producingDetails: string = '#producing-skills details';

  $(producingSpan).on('click', () => {
    $(producingSpan).css('display', 'none');
    $('#developing-skills').css('zIndex', '-1');
    $('#producing-skills').toggleClass('collapsed expanded');
  });
  $(producingDetails).on('click', () => {
    $(producingSpan).css('display', 'flex');
    $('#developing-skills').css('zIndex', '');
    $('#producing-skills').toggleClass('expanded collapsed');
  });

  const producerCarousel: string = '#producing-skills .producing-carousel article';
  const selectProducerLeft: string = '#producing-skills .producing-navigation button[class*="left"] img';
  const selectProducerRight: string = '#producing-skills .producing-navigation button[class*="right"] img';

  let $proArticle = $(producerCarousel);
  let proArticles = $proArticle.length;
  let $proLeftButton = $(selectProducerLeft).parent();
  let $proRightButton = $(selectProducerRight).parent();
  let producerWidth = $proArticle.first().width() || 0;

  $proRightButton.on('click', () => {
    if (producerIndex < proArticles - 1) scrollToIndex(producerIndex + 1);
  });
  $proLeftButton.on('click', () => {
    if (producerIndex > 0) scrollToIndex(producerIndex - 1);
  });

  //--|🠋 Update the menu to display the content at the specified index. 🠋|--//
  let producerIndex = 0;
  const updateMenu = (newIndex: number) => {
    $proArticle.removeClass('visible hidden').each(function (index) {
      $(this)
        .toggleClass('visible', index === newIndex)
        .toggleClass('hidden', index !== newIndex);
    });
  };
  //--|🠋 Scroll to the content at the specified index. 🠋|--//
  const scrollToIndex = (newIndex: number) => {
    const direction = newIndex > producerIndex ? '+=' : '-=';
    $proArticle.animate({ right: `${direction}${producerWidth}px` }, 500);
    producerIndex = newIndex;
    updateMenu(producerIndex);
    updateNavigation();
  };
  //--|🠋 Update navigation buttons based on the current index. 🠋|--//
  const updateNavigation = () => {
    $proLeftButton.toggleClass('disabled', producerIndex === 0).toggleClass('enabled', producerIndex > 0);
    $proRightButton
      .toggleClass('disabled', producerIndex === proArticles - 1)
      .toggleClass('enabled', producerIndex < proArticles - 1);
  };

  // $(producingSpan).on('mouseover', () => {
  //   // $(producingSpan).css('display', 'none');
  //   // $('#producing-skills').toggleClass('collapsed expanded');
  // });

  updateMenu(producerIndex);
  updateNavigation();
});

$(function () {
  const developerCarousel = '#developing-skills .developing-carousel article';
  const developerLeftSelector = '#developing-skills .developing-navigation button[class*="left"] img';
  const developerRightSelector = '#developing-skills .developing-navigation button[class*="right"] img';
  let $developerArticle = $(developerCarousel);
  let developerArticles = $developerArticle.length;
  let $developerLeftButton = $(developerLeftSelector).parent();
  let $developerRightButton = $(developerRightSelector).parent();
  let developerWidth = $developerArticle.first().width() || 0;
  $developerRightButton.on('click', () => {
    if (developerIndex < developerArticles - 1) scrollToIndex(developerIndex + 1);
  });
  $developerLeftButton.on('click', () => {
    if (developerIndex > 0) scrollToIndex(developerIndex - 1);
  });
  //--|🠋 Update the menu to display the content at the specified index. 🠋|--//
  let developerIndex = 0;
  const updateMenu = (newIndex: number) => {
    $developerArticle.removeClass('visible hidden').each(function (index) {
      $(this)
        .toggleClass('visible', index === newIndex)
        .toggleClass('hidden', index !== newIndex);
    });
  };
  //--|🠋 Scroll to the content at the specified index. 🠋|--//
  const scrollToIndex = (newIndex: number) => {
    const direction = newIndex > developerIndex ? '+=' : '-=';
    $developerArticle.animate({ right: `${direction}${developerWidth}px` }, 500);
    developerIndex = newIndex;
    updateMenu(developerIndex);
    updateNavigation();
  };
  //--|🠋 Update navigation buttons based on the current index. 🠋|--//
  const updateNavigation = () => {
    $developerLeftButton.toggleClass('disabled', developerIndex === 0).toggleClass('enabled', developerIndex > 0);
    $developerRightButton
      .toggleClass('disabled', developerIndex === developerArticles - 1)
      .toggleClass('enabled', developerIndex < developerArticles - 1);
  };
  const developingDetails: string = '#developing-skills details';
  const developingSpan: string = '#developing-skills menu span';
  $(developingSpan).on('click', () => {
    $(developingSpan).css('display', 'none');
    $('#producing-skills').css('zIndex', '-1');
    $('#developing-skills').toggleClass('collapsed expanded');
  });
  $(developingDetails).on('click', () => {
    $(developingSpan).css('display', 'flex');
    $('#producing-skills').css('zIndex', '');
    $('#developing-skills').toggleClass('expanded collapsed');
  });

  updateMenu(developerIndex);
  updateNavigation();
});
