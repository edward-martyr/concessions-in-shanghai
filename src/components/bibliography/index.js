import React, { useEffect, useRef, useState } from 'react';
import Cite from 'citation-js';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import urlfy from '../../utils/urlfy';
import bibliography from './index.bib';
import './style.scss';

const bibLoadEvent = new CustomEvent('onBibLoad');
const bibs = new Cite(bibliography);

export const Citation = ({ entries }) => {
  const [tooltipHTML, setTooltipHTML] = useState('');
  const randomId = crypto.randomUUID();

  useEffect(() => {
    window.addEventListener('onBibLoad', () => {
      let tmp = '';
      for (const entry of new Set([...entries])) {
        const el = document.querySelector(`section#bibliography div[data-csl-entry-id="${entry}"]`);
        el.classList.add('csl-entry-visible');
        tmp += el.outerHTML;
      }
      setTooltipHTML(tmp);
    });
  }, [tooltipHTML]);

  return (
    <span
      className="citation"
      data-tooltip-id={`tooptip-${entries}-${randomId}`}
      data-tooltip-html={tooltipHTML}
      onClick={null}
    >
      {bibs.format('citation', {
        entry: entries,
      })}
      <ReactTooltip
        className="tooltip"
        id={`tooptip-${entries}-${randomId}`}
        wrapper="span"
        hover
        click
        clickable
      />
    </span>
  );
};

export const Bibliography = () => {
  const bibRef = useRef(null);

  useEffect(() => {
    bibRef.current.appendChild(
      urlfy(
        bibs.get({
          format: 'real',
          type: 'html',
          style: 'citation-apa',
        }),
      ),
    );
    window.dispatchEvent(bibLoadEvent);
  }, []);

  return (
    <section id="bibliography" ref={bibRef}>
      <h2>Bibliography</h2>
    </section>
  );
};
