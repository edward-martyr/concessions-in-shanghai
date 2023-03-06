import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Citation } from '../bibliography';
import refugees from '../../assets/images/Refugees flooding into the French Concession.jpg';
import './style.scss';

export default () => {
  return (
    <div id="header">

      <figure className="header-background-image">
        <img
          src={refugees}
          alt="Réfugiés chinois pénétrant dans la Concession par la porte Brenier de Montmorand"
        />
        <figcaption>
          Refugees flooding into the French Concession <Citation entries={['RefugiesChinoisPenetrant']} />
        </figcaption>
      </figure>

      <div className="header-background-overlay-container">
        <Parallax
          translateY={['-50vh', '10vh']}
          scale={[0.8, 1.2, 'easeInQuad']}
          opacity={[0.75, 0.95]}
        >
          <div className="header-background-overlay">
            <h1>
              Concessions in Shanghai
            </h1>
            <h2>
              Consequence of Aggression, Nevertheless Refuge Therefrom
            </h2>
          </div>
        </Parallax>
      </div>

    </div>
  );
};
