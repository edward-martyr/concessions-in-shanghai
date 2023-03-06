import React from 'react';
import Hyphenated from 'react-hyphen';

import emblemOfShanghai from '../../assets/images/Old_emblem_of_Shanghai.svg';
import bund1849 from '../../assets/images/Bund1850 painting.jpg';
import { Bibliography, Citation } from '../../components';
import './style.scss';

const Home = () => {
  return (
    <Hyphenated>
      <div id="home">
        <section>
          <h2 className="section">Western Imperialist Interest in Shanghai</h2>
          <p>
            In the popular reference book series <cite>Twentieth Century Impressions</cite> <Citation entries={['wrightTwentiethCenturyImpressions']} /> published in Britain and edited by Arnold Wright, who was an enthusiast for colonial imperialism <Citation entries={['wrightRomanceColonisationBeing1923']} />, Shanghai is depicted as a major cotton, silk and fertiliser export port in the 18th and early 19th centuries. It was fashioned as “an important centre of trade”, even “before [it] attracted European notice”.
          </p>
          <p>
            As Wright narrates, as early as in 1756, Shanghai began to attract British interest, with Frederick Pigou, a member of the East India Company, noting it down in his memo. However, the Company’s attempts to make Shanghai a central trading port for tea, silk, and opium were unsuccessful, rebuked by the local officials. It was not until during the First Opium War, when the British navy sailed into the waters of Shanghai, that the naval officers were struck by the position of Shanghai in terms of trade, and therefore Shanghai was included as one of the treaty ports in the Treaty of Nanking (南京條約) in 1842.
          </p>
          <p>
            To Wright, the opening of Shanghai to Britain was “almost as a matter of course”: It was the port of the most economic interest, maybe next to Canton, to the British. “There is no more interesting” than the inevitable event that the “self-contained, self-absorbed, […], narrow, [and ignorant]” East clashed with the “bustling, aggressive” West; the fallout that the West forced open treaty ports, or in Wright’s wording, breathed the air of “a new commercial life”, should be a lesson to the Chinese, who must learn “the advantages of Western civilisation”, including free trade.
          </p>
          <p>
            The British imperialists’ fervent interest in Shanghai only was the beginning, projecting growing interest from other Western imperialists, notably France and the US, who followed quickly with their own advances in Shanghai, and thereby established concessions in Shanghai respectively.
          </p>
          <p>
            Whereas the concessions are the result of Western imperialist advances in Shanghai, we also have to see that the aggression of the “Treaty Powers” was the underpinning and unchangeable background of the time, but in a smaller scope, there were also successful humanitarian efforts within the concessions to provide refuge for people, Chinese and foreign, from more imminent, and more violent dangers.
          </p>
          <p>
            In the following timeline, I will refer to primary sources as well as early 20th-century secondary sources to trace the history of Shanghai regarding the establishment and development of concessions; while some sources (such as Wright) are fairly opinionated, some are less so and are peer-reviewed journal articles, allowing me to present an original and comprehensive perspective on concessions in Shanghai.
          </p>
          <div className="timeline">
            <div>
              <section className="year">
                <h3 className="year">Qing</h3>
                <section>
                  <ul>
                    <h4>Shanghai County</h4>
                    <figure>
                      <img
                        src={emblemOfShanghai}
                        alt="Emblem of Shanghai"
                      />
                      <figcaption>
                        Emblem of Shanghai in Qing Dynasty <Citation entries={['samhaninOldEmblemShanghai']} />
                      </figcaption>
                    </figure>
                    <li>
                      Shanghai County (上海縣) was established as early as Yuan Dynasty, and it continued to grow more and more important as a trade port during Ming and Qing Dynasties.
                    </li>
                    <li>
                      Shanghai has become a major cotton, silk and fertiliser export port in the 18th and early 19th centuries before it drew Western attention <Citation entries={['wrightTwentiethCenturyImpressions']} />.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1842</h3>
                <section>
                  <ul>
                    <h4>Yangtze River Campaign, First Opium War <Citation entries={['statelibraryofpennsylvaniaBulletinsStateIntelligence', 'wrightTwentiethCenturyImpressions']} />.</h4>
                    <li>
                      The final major series of battles of the First Opium War was fought on the Yangtze River in China.
                      The British struck up the Yangtze River from Shanghai, through which they would eventually reach Nanking (南京 Nanjing).
                    </li>
                    <li>
                      On June 14, 1842, the British fleet captured the mouth of Whangpoo River (i.e., 黃浦江 Huangpu River, the “mother river” of Shanghai).
                    </li>
                    <li>
                      Then on June 16, the British occupied two towns (Woosong [吳淞 Wusong] and Paoshan [寶山 Baoshan]) near the mouth in the Battle of Woosong (吳淞戰役), surrounding Shanghai County.
                    </li>
                    <li>
                      On June 19, the British occupied Shanghai.
                    </li>
                  </ul>
                </section>
                <section>
                  <ul>
                    <h4>Treaty of Nanking</h4>
                    <li>
                      The Treaty of Nanking was signed on August 29, 1842, in Nanjing, China, between Great Britain and Qing China as a peace treaty ending the First Opium War. It was the first of what were later called “unequal treaties” that the Qing government was forced to sign with imperialist powers.
                    </li>
                    <li>
                      Shanghai was one of the five cities that were forced to open up to foreign trade and settlement.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1843</h3>
                <section>
                  <ul>
                    <h4>Treaty of the Bogue</h4>
                    <li>
                      The Treaty of the Bogue (虎門條約) was signed as a supplement to the Treaty of Nanking on October 8, 1843.
                    </li>
                    <li>
                      Crucially, this treaty allowed British subjects to reside and purchase land in the treaty ports, granting them extraterritorial privileges. This also granted Britain the most Favored Nation status in China. This was seen as the basis of the Land Regulations of 1845, which was the legal basis of the establishment of the British Concession <Citation entries={['fraserStatusInternationalSettlement1939', 'hudsonInternationalProblemsShanghai1927']} />.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1844</h3>
                <section>
                  <ul>
                    <h4>More treaties</h4>
                    <li>
                      In this year, France and the US respectively made similar treaties with China following the the example of Britain <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1845</h3>
                <section>
                  <ul>
                    <h4>Establishment of the British Settlement</h4>
                    <li>
                      With the previous treaties paving their way, the British established a settlement in Shanghai, and promulgated the Land Regulations of 1845, clearly setting the boundaries of the settlement <Citation entries={['fraserStatusInternationalSettlement1939', 'hudsonInternationalProblemsShanghai1927']} />. Ironically, the agreement between the British consul and the Intendant (道臺 Daotai) of Shanghai was reached completely without due care, after they wished each other “daily happiness” <Citation entries={['lockwoodInternationalSettlementShanghai1934']} />.
                    </li>
                  </ul>
                </section>
                <section>
                  <ul>
                    <h4>Prelude to the American Settlement</h4>
                    <li>
                      Americans were yet to establish a formal concession, but they started to gather around Hongkew (虹口 Hongkou), East Shanghai, which would later be the site of the American Settlement.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1848</h3>
                <section>
                  <ul>
                    <h4>Establishment of the American Settlement</h4>
                    <li>
                      A bishop of the American Episcopal Church, W. J. Boone, bought an area in Hongkew to create real estates in Shanghai, in the name of building a church back in 1845. He proposed to create an American settlement and in 1848, the Intendant of Shanghai approved the proposal <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
                      Again, this can be seen as also not very formal, albeit to a lesser degree than how the British Settlement was casually agreed upon, in that Boone was just a bishop, a private individual owning land supposedly for the purpose of building a church, and the Intendant of Shanghai simply approved the establishment of an American settlement.
                    </li>
                    <li>
                      Further, the informality can be seen from the fact that the official boundaries of the American Settlement were not clearly defined until 13 years later, in 1863, which is also the year that it was merged with the British Settlement, the last year that it actually existed <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1849</h3>
                <section>
                  <ul>
                    <h4>Establishment of the French Concession</h4>
                    <li>
                      On April 6, 1849, the French consul in Shanghai, Charles de Montigny, signed an agreement with the Intendant of Shanghai, to establish the French Concession in Shanghai. It was bounded by Yang-King-Pang (洋涇浜, Yangjing Creek) on the south, by the Chinese City wall and Whangpoo River on the east; to its north was the British Settlement, but to its west there was no boundaries, and it could be extended as need be <Citation entries={['lepaludHistoryFrenchConcession1935']} />.
                    </li>
                    <li>
                      Of the three concessions in Shanghai at the time (the other two were later combined), the French Concession was established the latest. This reflects the fact that the French were not as politically involved, and rather indifferent to the commercial activities in Shanghai compared to the British and Americans <Citation entries={['hanFrenchColonialPolicy1932']} />.
                    </li>
                  </ul>
                </section>
                <section>
                  <ul>
                    <h4>Growing Prosperity of the Bund</h4>
                    <li>
                      As the following painting depicts, the Bund was already scattered with a few Western buildings at the time, and Western water sports such as regatta was played on Whangpoo River.
                      Notably, most of the buildings were foreign companies, including Gibb, Livingstone & Co., Augustine Heard & Co., Jardine, Matheson & Co., Orient (P & O) Company, and so on.
                      <figure>
                        <div className="scroll">
                          <div className="auto-scroll">
                            <span className="scroll-indicator">→</span>
                            <img src={bund1849} alt="The Bund in 1849–1850" />
                          </div>
                        </div>
                        <figcaption>
                          General view of the Bund (painting) — 1849–1850 <Citation entries={['virtualcitiesprojectinstitutdasieorientaleGeneralViewBund']} />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      This is the first one of a series of paintings depicting the Bund from 1849 to 1879, which all show the growing prosperity of the Bund, which was the central area of the concessions. I will append the entire series of paintings at the end of this section.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1853</h3>
                <section>
                  <ul>
                    <h4>Abandonment of Exclusion Policies</h4>
                    <li>
                      Originally, the concessions were exclusive to the respective nationals, and in particular, the Chinese were not allowed to enter any of the concessions. However, the regulations gradually loosened, when disturbances arose in the Chinese town, and people would flock into the concessions for refuge.
                    </li>
                    <li>
                      In 1853, with Taiping (太平) Rebellion spreading into Shanghai, the American consul urged that Chinese refugees be permitted to stay in the concessions, which was a major milestone pushing the cooperation between concessions and abandoning efforts of exclusion <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1863</h3>
                <section>
                  <ul>
                    <h4>Establishment of the International Settlement</h4>
                    <li>
                      After just about over a decade of existence, the American and British Settlements were amalgamated into a single foreign concession, later called the International Settlement by agreement <Citation entries={['fraserStatusInternationalSettlement1939']} />.
                    </li>
                    <li>
                      The French Concession did not take part in the amalgamation, and remained as a separate concession.
                    </li>
                  </ul>
                </section>
              </section>
            </div>
          </div>

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
        </section>

        <Bibliography />
      </div>
    </Hyphenated>
  );
};

export default Home;
