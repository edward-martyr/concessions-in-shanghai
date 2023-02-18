import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import emblemOfAmericanConcession from '../../assets/images/Old_emblem_of_Shanghai.svg';
import {
  Bibliography, Citation,
} from '../../components';
import './style.scss';

const Home = () => {
  return (
    <div id="home">
      <figure>
        <img src={emblemOfAmericanConcession} alt="Emblem of American Concession" />
        <figcaption>Emblem of Shanghai <Citation entries={['samhaninOldEmblemShanghai']} /></figcaption>
      </figure>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="1848‒1863"
          className="vertical-timeline-element"
        >
          <h3 className="vertical-timeline-element-title">American Concession in Shanghai</h3>
          <p>
            In 1845, the bishop of the American Episcopal Church W. J. Boone bought an area in Hongkew to create real estates in Shanghai, in the name of building a church.
            Later Boone proposed to create an American settlement and in 1848, the Shanghai County approved the proposal.
            On 25 June 1863 American consul George Seward signed an agreement with the head of Shanghai County Huang Fang (黃芳)
            to create the American Concession in Shanghai, which also confirmed the boundary of area.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Bibliography />
    </div>
  );
};

export default Home;
