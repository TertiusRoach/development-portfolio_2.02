import './index.scss';
import React from 'react';
import Body from './A-body/Body';
import { createRoot } from 'react-dom/client';

const pageName = 'react';
const element = document.getElementById(`${pageName}-body`);
if (element) {
  let body = <Body pageName={pageName} blockName={`${pageName}-body`} />;
  createRoot(element).render(body);
} else {
  throw new Error('Root element not found.');
}
