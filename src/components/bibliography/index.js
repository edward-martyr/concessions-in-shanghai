import React, { useEffect, useRef, useState } from 'react';
import Cite from 'citation-js';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import urlfy from '../../utils/urlfy';
import bibliography from './index.bib';
import './style.scss';

const bibs = new Cite(bibliography);

export const Citation = ({ entries }) => {
  const [tooltipHTML, setTooltipHTML] = useState('');

  useEffect(() => {
    window.addEventListener('load', () => {
      let tmp = '';
      for (const entry of entries) {
        tmp += `<div class="csl-entry">${document.querySelector(`div[data-csl-entry-id="${entry}"]`).innerHTML}</div>`;
      }
      setTooltipHTML(tmp);
    });
  }, [tooltipHTML]);

  return (
    <span className="citation" data-tooltip-id={`tooptip-${entries}`} data-tooltip-html={tooltipHTML}>
      {bibs.format('citation', {
        entry: entries,
      })}
      <ReactTooltip className="tooltip" id={`tooptip-${entries}`} wrapper="span" clickable />
    </span>
  );
};

export const Bibliography = () => {
  const bibRef = useRef(null);

  useEffect(() => {
    bibRef.current.appendChild(
      urlfy(bibs.get({
        format: 'real',
        type: 'html',
        style: 'citation-apa',
      })),
    );
  }, []);

  return (
    <div id="bibliography" ref={bibRef}>
      <h2>Bibliography</h2>
    </div>
  );
};
