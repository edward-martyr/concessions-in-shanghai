const re = /((?:https?:\/\/|www\.)(?:[a-z0-9\-]+\.)+[a-z0-9]{2,}(?:\/[^<>\s]*)?)/gi;

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
