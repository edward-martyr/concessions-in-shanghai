const re = /(?![^<]*>|[^<>]*<\/)((https?:)\/\/[a-z0-9&#=.\/\-?_]+)/gi;

const urlfy = (domElement) => {
  const textNodes = domElement.querySelectorAll('p, li, td, span, a, div[class^="csl-"]');

  for (const textNode of textNodes) {
    const html = textNode.innerHTML;
    const replaced = html.replace(re, '<a href="$1" target="_blank">$1</a>');
    textNode.innerHTML = replaced;
  }

  return domElement;
};

export default urlfy;
