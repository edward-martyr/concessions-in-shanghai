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

      <div className="header-background-overlay">
        <Parallax rootMargin={{
          top: 0, bottom: -300,
        }}
          scale={[0.9, 1, 'easeInQuad']}
          opacity={[0.75, 1]}
        >
          <h1>
            Concessions in Shanghai
          </h1>
          <h2>
            A Wartime Haven During the Second Sino-Japanese War
          </h2>
        </Parallax>
      </div>

    </div>
  );
};
