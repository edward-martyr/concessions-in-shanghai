import React from 'react';

import './style.scss';

export default () => {
  return (
    <div id="footer">
      <div className="divider" />
      <div>
        {`© 2023${new Date().getFullYear() > 2023 ? `-${new Date().getFullYear()}` : ''} Yuanhao Chen. `}
        For History 77 <i>Imperialism in Modern East Asia</i> Final Project.
      </div>
    </div>
  );
};
