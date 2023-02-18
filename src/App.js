import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import {
  Footer, Header,
} from './components';
import { Home } from './screens';

const App = () => {
  useEffect(() => {
    WebFont.load({
      typekit: { id: 'rpl2zoy' },
      google: {
        families: ['Noto Serif KR:400,700&subset=korean'],
      },
    });
  }, []);

  return (
    <div id="app">
      <Header />
      <div id="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
