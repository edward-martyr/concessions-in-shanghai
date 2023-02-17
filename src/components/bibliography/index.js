import React, { useEffect, useRef } from 'react';
import Cite from 'citation-js';
import bibliography from './index.bib';

const bibs = new Cite(bibliography);

const bibsDiv = bibs.get({ format: 'real', type: 'html', style: 'citation-apa' });

/**
 * @param {string[]} entries - The entries to be formatted
 */
export const inlineCite = (entries) => {
  return bibs.format('citation', {
    entry: entries,
  });
};

const Bibliography = () => {
  const bibRef = useRef(null);

  useEffect(() => {
    bibRef.current.appendChild(bibsDiv);
  }, []);

  return (
    <div id="bibliography" ref={bibRef}>
      <h2>Bibliography</h2>
    </div>
  );
};

export default Bibliography;
