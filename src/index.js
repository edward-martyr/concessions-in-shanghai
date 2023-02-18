import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-vertical-timeline-component/style.min.css';

import './index.scss';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
);
