// resume-header.tsx
import React from 'react';

function resumeHeader(pageName: string | any, blockName: string | any) {
  const logoAdjacent: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-adjacent/primary-light.svg`;
  const logoIcon: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-icon/primary-light.svg`;
  console.log('//--|🠊 resume-header.tsx loaded 🠈|--//');
  return (
    <>
      <aside>
        <img src={logoAdjacent} alt="Résumé Logo" />
      </aside>
      <aside>
        <menu>
          <button>
            <span>
              <img src={logoIcon} alt="Résumé Logo" />
              <h6>Button</h6>
            </span>
          </button>
        </menu>
      </aside>
    </>
  );
}
export default resumeHeader;
