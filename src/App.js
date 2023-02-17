import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { inlineCite } from './components/bibliography';
import { Bibliography, Header } from './components';

const App = () => {
  useEffect(() => {
    WebFont.load({ typekit: { id: 'rpl2zoy' } });
  }, []);

  return (
    <div id="app">
      <Header />
      <div id="content">
        <p>{inlineCite(['wassersteinSecretWarShanghai1999'])}</p>
        <Bibliography />
      </div>
    </div>
  );
};

export default App;
