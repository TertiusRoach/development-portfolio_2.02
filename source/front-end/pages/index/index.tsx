// index.tsx
import React from 'react';
// import 'source/front-end/pages/index/style.css';
// import './style.css';
// const path = require('path');
import { createRoot } from 'react-dom/client';

import Body from './A-body/Body';

const rootElement = document.getElementById('index-body');
const index = <Body pageName="index" blockName="default-body" />;
if (rootElement) {
  createRoot(rootElement).render(index);
} else {
  throw new Error('Root element not found.');
}
