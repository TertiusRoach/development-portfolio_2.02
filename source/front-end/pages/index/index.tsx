import './index.scss';
import React from 'react';
import Body from './A-body/Body';
import { createRoot } from 'react-dom/client';

const blockName = 'react';
const element = document.getElementById('index-body');
if (element) {
  let body = <Body pageName="index" blockName={`${blockName}-body`} />;
  createRoot(element).render(body);
} else {
  throw new Error('Root element not found.');
}
