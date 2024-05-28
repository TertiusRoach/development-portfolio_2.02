// resume-header.tsx
import React from 'react';

function resumeHeader(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;

  const logoAdjacent: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-adjacent/primary-light.svg`;
  const logoIcon: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-icon/primary-light.svg`;
  const skillsIcon: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/lightbulb-on.svg`;
  const projectsIcon: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/browser.svg`;

  console.log('//--|🠊 resume-header.tsx loaded 🠈|--//');
  return (
    <>
      <aside>
        <img src={logoAdjacent} alt="Résumé Logo" />
      </aside>
      <aside>
        <menu>
          <button>
            <a className="active" href="#main-skills" id="header-home">
              <img src={skillsIcon} alt="..." />
              <h4>Skills</h4>
            </a>
          </button>
          <button>
            <a id="header-projects">
              <img src={projectsIcon} alt="..." />
              <h4>Projects</h4>
            </a>
          </button>
        </menu>
      </aside>
    </>
  );
}
export default resumeHeader;
