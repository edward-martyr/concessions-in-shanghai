import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Bibliography, Citation, Header } from './components';

const App = () => {
  useEffect(() => {
    WebFont.load({ typekit: { id: 'rpl2zoy' } });
  }, []);

  return (
    <div id="app">
      <Header />
      <div id="content">
        <p>
          What <Citation entries={['altmanFlightShanghai193819402000', 'wassersteinSecretWarShanghai1999']} /> is this.
        </p>
        <Bibliography />
      </div>
    </div>
  );
};

export default App;
