import React, { useEffect, useRef } from 'react';
import WebFont from 'webfontloader';
import bibsDiv, { inlineCite } from './bibliography';

import { Header } from './components';

const App = () => {
  const bibRef = useRef(null);

  useEffect(() => {
    WebFont.load({ typekit: { id: 'rpl2zoy' } });
    bibRef.current.appendChild(bibsDiv);
  }, []);

  return (
    <div id="app">
      <Header />
      <div id="content">
        <p>{inlineCite(['wassersteinSecretWarShanghai1999'])}</p>
        <div ref={bibRef} />
      </div>
    </div>
  );
};

export default App;
