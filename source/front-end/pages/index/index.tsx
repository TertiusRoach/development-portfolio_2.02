// index.tsx
import './index.scss';
import React from 'react';
import Body from './A-body/Body';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('index-body');
const index = <Body pageName="index" blockName="default-body" />;
if (rootElement) {
  createRoot(rootElement).render(index);
} else {
  throw new Error('Root element not found.');
}
