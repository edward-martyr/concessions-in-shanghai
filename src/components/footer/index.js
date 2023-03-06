import React from 'react';

import './style.scss';

export default () => {
  return (
    <div id="footer">
      <div className="divider" />
      <div>
        {`© 2023${
          new Date().getFullYear() > 2023 ? `-${new Date().getFullYear()}` : ''
        } Yuanhao Chen. `}
        Built with <a href="https://reactjs.org/">React.js</a> for History 77 <i>Imperialism in Modern East Asia</i> Media Project.
      </div>
      <div className="trivia">
        Trivia: Why is the domain name <a href="https://nyoeghau.com">Nyoeghau.com</a>? Answer: It is my given name 元鎬 romanised according to the Shanghainese pronunciation.
      </div>
    </div>
  );
};
