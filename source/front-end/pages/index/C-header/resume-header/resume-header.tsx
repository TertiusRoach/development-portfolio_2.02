// resume-header.tsx
import React from 'react';

function resumeHeader(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  const archiveURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00';

  let logoAdjacent: string = `${archiveURI}/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-adjacent/primary-light.svg`;
  let logoIcon: string = `${archiveURI}/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-icon/primary-light.svg`;
  let homeHeader: string = `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/home.svg`;
  let skillsHeader: string = `${archiveURI}/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/lightbulb-on.svg`;
  let contactHeader: { desktop: string; mobile: string } = {
    desktop: `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/phone.svg`,
    mobile: `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mobile-alt.svg`,
  };

  let projectsMain: string = `${archiveURI}/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/browser.svg`;

  console.log('//--|🠊 resume-header.tsx loaded 🠈|--//');
  return (
    <>
      <aside>
        <img src={logoAdjacent} alt="Résumé Logo" />
      </aside>
      <aside>
        <menu>
          <button>
            <a className="highlight" href="#main-home" id="header-home">
              <img src={homeHeader} alt="..." />
              <h4>Home</h4>
            </a>
          </button>
          <button>
            <a className="downplay" href="#main-skills" id="header-skills">
              <img src={skillsHeader} alt="..." />
              <h4>Skills</h4>
            </a>
          </button>
          <button>
            <a className="downplay" href="#main-contact" id="header-contact">
              <img src={contactHeader.desktop} alt="..." />
              <h4>Contact</h4>
            </a>
          </button>
        </menu>
      </aside>
    </>
  );
}
export default resumeHeader;
