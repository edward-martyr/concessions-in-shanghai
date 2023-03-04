import React from 'react';

// import emblemOfShanghai from '../../assets/images/Old_emblem_of_Shanghai.svg';
import { Bibliography, Citation } from '../../components';
import './style.scss';

const Home = () => {
  return (
    <div id="home">
      {/* <figure>
        <img
          src={emblemOfShanghai}
          alt="Emblem of Shanghai"
        />
        <figcaption>
          Emblem of Shanghai <Citation entries={['samhaninOldEmblemShanghai']} />
        </figcaption>
      </figure> */}

      <figure>
        <img
          className="fullwidth"
          src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Shanghai_1935_S1_AMS-WO.jpg"
          alt="Plan of Shanghai (Sheet 1)"
        />
        <figcaption>
          Plan of Shanghai (Sheet 1) <Citation entries={['unitedstatesarmymapservicePlanShanghaiSheet1935']} />
        </figcaption>
      </figure>

      <h3 className="vertical-timeline-element-title">
        American Concession in Shanghai
      </h3>
      <p>
        In 1845, the bishop of the American Episcopal Church W. J. Boone
        bought an area in Hongkew (i.e., 虹口 Hongkou) to create real estates in Shanghai,
        in the name of building a church. Later Boone proposed to create an
        American settlement and in 1848, the Shanghai County approved the
        proposal. On 25 June 1863 American consul George Seward signed an
        agreement with the head of Shanghai County Huang Fang (黃芳) to
        create the American Concession in Shanghai, which also confirmed the
        boundary of area.
      </p>
      1848-1863

      <Bibliography />
    </div>
  );
};

export default Home;
