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
    </div>
  );
};
