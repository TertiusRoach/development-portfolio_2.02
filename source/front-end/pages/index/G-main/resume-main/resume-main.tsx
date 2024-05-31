// resume-main.tsx
import $ from 'jquery';
import React from 'react';
import MainHome from './MainHome';
import MainSkills from './MainSkills';
import MainContact from './MainContact';
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
  const producerCarousel: string = '#producing-skills .producing-carousel article';
  const selectProducerLeft: string = '#producing-skills .producing-navigation button[class*="left"] img';
  const selectProducerRight: string = '#producing-skills .producing-navigation button[class*="right"] img';

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

  updateNavigation();
  updateMenu(producerIndex);
});

$(function () {
  const developingSpan: string = '#developing-skills menu span';
  const developingDetails: string = '#developing-skills details';
  const developerCarousel = '#developing-skills .developing-carousel article';
  const developerLeftSelector = '#developing-skills .developing-navigation button[class*="left"] img';
  const developerRightSelector = '#developing-skills .developing-navigation button[class*="right"] img';
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
  updateNavigation();
  updateMenu(developerIndex);
});
