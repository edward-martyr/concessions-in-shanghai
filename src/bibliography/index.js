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

export default bibsDiv;
