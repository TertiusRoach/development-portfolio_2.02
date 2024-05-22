import './index.scss';
import React from 'react';
import Body from './a-body/body';
import { createRoot } from 'react-dom/client';

const blockName = 'react';
const element = document.getElementById('index-body');
if (element) {
  let load = <Body pageName="index" blockName={`${blockName}-body`} />;
  createRoot(element).render(load);
} else {
  throw new Error('Root element not found.');
}
