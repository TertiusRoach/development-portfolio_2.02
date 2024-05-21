// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Body from './A-body/Body';

const index = <Body pageName="index" blockName="default-body" />;

const rootElement = document.getElementById('index-body');
if (rootElement) {
  createRoot(rootElement).render(index);
} else {
  throw new Error('Root element not found.');
}
