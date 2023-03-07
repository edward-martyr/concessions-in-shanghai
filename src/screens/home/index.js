import React from 'react';
import Hyphenated from 'react-hyphen';

import emblemOfShanghai from '../../assets/images/Old_emblem_of_Shanghai.svg';
import bund1849 from '../../assets/images/Bund1850 painting.jpg';
import bund1854 from '../../assets/images/Bund1854painting.jpg';
import bund1857 from '../../assets/images/bund1857painting.jpg';
import bund1862 from '../../assets/images/bund1862painting.jpg';
import bund1867 from '../../assets/images/bund1867painting.jpg';
import bund1879 from '../../assets/images/bund1879painting.jpg';
import frenchConcession1865 from '../../assets/images/ID_329_1870.jpg';
import frenchConcession1900 from '../../assets/images/Plan_de_la_concession_française_[...]Chollot_Joseph-Julien_btv1b53058954s.jpeg';
import concession1870 from '../../assets/images/IFN_7885953.jpg';
import warNowInShanghai from '../../assets/images/commonwealth_9s161h801_access_full.jpg';
import bombedNantaoScene from '../../assets/images/BOMBEDNANTAOSCENE1937.png';
import japanesePromise from '../../assets/images/abendJapanesePromiseNot1937.png';
import newNantaoBombing from '../../assets/images/timesNEWNANTAOBOMBING1937.png';
import fleeNantao from '../../assets/images/Fleeing from Nanshi.jpeg';
import refugeeAtGate from '../../assets/images/127E2.jpg';
import communityKitchen from '../../assets/images/12_community_courtyard_kitchen.png';
import heim from '../../assets/images/screen_shot_2021-07-20_at_10341_pm.png';
import { Bibliography, Citation, Ornament } from '../../components';
import './style.scss';

const Home = () => {
  return (
    <Hyphenated>
      <div id="home">
        <section>
          <h2 className="section">Western Imperialist Interest in Shanghai</h2>
          <p>
            In the popular reference book series <cite>Twentieth Century Impressions</cite> <Citation entries={['wrightTwentiethCenturyImpressions']} /> published in Britain and edited by Arnold Wright, who was an enthusiast for colonial imperialism <Citation entries={['wrightRomanceColonisationBeing1923']} />, Shanghai is depicted as a major cotton, silk and fertiliser export port in the 18th and early 19th centuries. It is fashioned as “an important centre of trade”, even “before [it] attracted European notice”.
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
            In the following timeline and throughout this project, I will mainly refer to primary sources as well as early 20th-century secondary sources to trace the history of Shanghai regarding the establishment and development of concessions; while some sources (such as Wright) are fairly opinionated, some are less so and are peer-reviewed journal articles, allowing me to present an original and comprehensive perspective on concessions in Shanghai.
          </p>

          <Ornament />
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
                        Emblem of Shanghai in Qing Dynasty <Citation entries={['samhaninOldEmblemShanghai']} />.
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
                    <h4>Growing prosperity of the Bund</h4>
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
                          General view of the Bund (painting) — 1849–1850 <Citation entries={['virtualcitiesprojectinstitutdasieorientaleGeneralViewBund']} />.
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      This is the first one of a series of paintings depicting the Bund from 1849 to 1879, which all reflect the growing prosperity of the Bund — the central area of the concessions. I will append the entire series of paintings later in this section.
                    </li>
                  </ul>
                </section>
              </section>
              <section className="year">
                <h3 className="year">1853</h3>
                <section>
                  <ul>
                    <h4>Abandonment of exclusion policies</h4>
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
                <h3 className="year">1854</h3>
                <section>
                  <ul>
                    <h4>Cooperation between concessions</h4>
                    <li>
                      In 1854, all three consuls (British, American, and French) promulgated the new Land Regulations, and formed a joint body, called Shanghai Municipal Council, to regulate the concessions <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
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
                      After just about over a decade of existence, the American and British Settlements were amalgamated into a single foreign concession, later called the International Settlement by agreement in October, 1863 <Citation entries={['hudsonInternationalProblemsShanghai1927', 'fraserStatusInternationalSettlement1939']} />.
                    </li>
                    <li>
                      Although the French consuls had consented to join the British and Americans, the French Concession eventually did not take part in the amalgamation, and remained as a separate concession, possibly due to the French government’s unwillingness to manage the concession with the British and Americans <Citation entries={['hanFrenchColonialPolicy1932', 'hudsonInternationalProblemsShanghai1927']} />.
                    </li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
          <Ornament />

          <p>
            Until this point, the basic layout of concessions in Shanghai has been established, with the concessions taking up most of the urban space in Shanghai, and the Chinese city, also called Nantao (南島, lit. ‘South Island’), being surrounded by the French Concession like a tiny stranded peninsula. North of the French Concession, across Yang-King-Pang, was the International Settlement (officially called the “Foreign Settlement at Shanghai North of the Yang-King-Pang”), combined from the British and the American Settlements.
          </p>
          <p>
            Nevertheless, based on this basic layout, the concessions were still fast developing and expanding.
          </p>
          <p>
            As mentioned above, below is a series of paintings done by the same artist <Citation entries={['virtualcitiesprojectinstitutdasieorientaleGeneralViewBund']} />, depicting the Bund over the three decades of 1849–1879, from the viewpoint of the east side of Whangpoo River (浦東, Pudong). The paintings depict and thus document the rigorous growth of the Bund, the central area of the concessions. Each year, we gradually see more foreign buildings and boats in greater size and number; the painter had to zoom out, either giving more portion to the sky and the river to maintain the aspect ratio or using panorama, to fit the growing content of the paintings.
          </p>
          {
            [bund1849, bund1854, bund1857, bund1862, bund1867, bund1879].map((img) => (
              <figure key={img}>
                <img className="fullwidth" src={img} alt={img} />
              </figure>
            ))
          }

          <Ornament />
          <p>
            In addition to the paintings, here are the maps of the French Concession in 1865 and 1900 respectively. In 1865, the French Concession was still a narrow area bounded between the north wall of the Chinese City, Whangpoo River (<i>Wampou Rivière</i>) and Yang-King-Pang below the British Settlement (it is glossed <i>Concession Anglaise</i> on the map, but it should have been merged into the International Settlement then). By 1900, the French Concession had expanded significantly into the west, now half-surrounding Nantao.
          </p>
          <figure>
            <img className="fullwidth" src={frenchConcession1865} alt="French Concession in 1865" />
            <figcaption>
              Plan of French Concession in 1865 <Citation entries={['virtualcitiesprojectinstitutdasieorientalePlanConcessionFrancaise1870']} />.
            </figcaption>
          </figure>
          <figure>
            <img className="fullwidth" src={frenchConcession1900} alt="French Concession in 1900" />
            <figcaption>
              Plan of French Concession in 1900 <Citation entries={['virtualcitiesprojectinstitutdasieorientalePlanConcessionFrancaise1900']} />.
            </figcaption>
          </figure>

          <Ornament />
          <p>
            Furthermore, here are two maps allowing us to compare the overall expansion of concessions in Shanghai between 1870 and 1935. The comparison is stunning: In 1870, the concessions still had very little geographical extension, either longitudinal or latitudinal; the left half of the map is basically empty, scattered with a few main roads; the central area of the concessions was only a little wider than the Chinese city. By 1935, the geography had changed dramatically: The concessions had expanded to the west, the east, and the north, giving significant longitudinal extension to the concessions; the concessions had become the dominant urban space in Shanghai. Interestingly, the scope of the map had finally expanded so that most of today’s city centre was included in the map; I used to live in the upper-right corner of the map.
          </p>
          <figure>
            <img className="fullwidth" src={concession1870} alt="Shanghai in 1870" />
            <figcaption>
              Street plan of the English, French and American Settlements, Shanghai <Citation entries={['virtualcitiesprojectinstitutdasieorientaleStreetPlanEnglish1870']} />.
            </figcaption>
          </figure>
          <figure>
            <img
              className="fullwidth"
              src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Shanghai_1935_S1_AMS-WO.jpg"
              alt="Plan of Shanghai (Sheet 1)"
            />
            <figcaption>
              Plan of Shanghai (Sheet 1) <Citation entries={['unitedstatesarmymapservicePlanShanghaiSheet1935']} />.
            </figcaption>
          </figure>
          <p>
            Most of the expansion was never regulated by the Chinese government; there was opposition that these were out of the boundaries of the settlements and therefore should be regulated by Chinese since 1925. In July, 1930, the Municipal Council finally decided that they might return some disputed areas to China, but this decision was never carried out before the Japanese expanded into those areas <Citation entries={['lockwoodInternationalSettlementShanghai1934']} />.
          </p>
        </section>

        <section>
          <h2 className="section">Japanese Imperialist Advances</h2>
          <p>
            Although a newcomer in the imperialist game in the late 19th century, Japan quickly found its place in the International Settlement after it was open to the Treaty Powers. In 1900, there were only 736 Japanese residents in Shanghai; in 1925, there were 13,804 of them. In 1927, two of the nine members of the Municipal Council were Japanese, showing that they had not only grown in numbers, but also in political influence in the International Settlement <Citation entries={['hudsonInternationalProblemsShanghai1927']} />.
          </p>

          <section>
            <h3 className="subsection">Shanghai Incident (一二八事變/第一次上海事變)</h3>
            <p>
              After victorious military advances in Northern China, including the Mukden Incident (九一八事變/滿州事變), Japan turned its focus to Shanghai in January, 1932. The Japanese, using Hongkew, which had turned from the initial American Settlement to a de facto Japanese Settlement, as their base, brutally attacked the neighbouring district of Chapei (閘北 Zhabei), attacking nearby aerodromes and burning down residential areas <Citation entries={['liZhonghuaMinguoShi2011']} />.
            </p>
            <p>
              Because the other Treaty Powers’ interests were involved in Shanghai, they attempted to negotiate a ceasefire in Shanghai. The initial ceasefire was agreed upon one month after the breakout of the conflict, but soon broken. The British, Americans and French attempted to negotiate a second ceasefire between China and Japan, but never succeeded. In March, the KMT army had to retreat eventually because of new Japanese forces approaching from inland to Shanghai. A peace agreement was reached later in May, stating that Shanghai was to be demilitarised, but only for China, while Japan could still deploy military in the city <Citation entries={['liZhonghuaMinguoShi2011']} />.
            </p>
            <figure>
              <img className="halfwidth" src={warNowInShanghai} alt="Shanghai Incident" />
              <figcaption>
                Map showing Japanese-Chinese warfare now in Shanghai <Citation entries={['suMapShowingJapaneseChinese1932']} />.
              </figcaption>
            </figure>
          </section>

          <section>
            <h3 className="subsection">Battle of Shanghai (淞滬會戰/第二次上海事變)</h3>
            <p>
              After the Marco Polo Bridge Incident (卢沟桥事变) in July, 1937 near Peking, Japanese invasion of Northern China began.
              As the beginning of its invasion of Southern China, i.e., marking a full-scale invasion of all of China,
              in August, 1937, the Japanese army launched a full-scale attack on Shanghai, with the aim of capturing the city.
            </p>
            <p>
              With further reinforcements from Japan in mid-August, the Japanese upscaled their attack on Shanghai, starting to repeatedly bomb civilian areas, especially the Chinese City of Nantao.
            </p>
            <p>
              For example, a news article reported that on August 29, there was a horrifying round of bombing in Nantao <Citation entries={['BOMBEDNANTAOSCENE1937']} />.
              <figure>
                <img src={bombedNantaoScene} alt="Bombed Nantao Scene" />
              </figure>
              On the next day, August 30, the Japanese promised not to bomb Nantao again “at the present time” <Citation entries={['abendJapanesePromiseNot1937']} />.
              <figure>
                <img src={japanesePromise} alt="Japanese Promise Not to Bomb Civilians 'at the Present Time'" />
              </figure>
              But soon enough, the Japanese broke their promise, and on September 6, they bombed Nantao again. The unreliability of Japanese bombing frightened the residents of Shanghai, including the foreign residents in the concessions <Citation entries={['timesNEWNANTAOBOMBING1937']} />.
              <figure>
                <img src={newNantaoBombing} alt="New Nantao Bombing" />
              </figure>
            </p>
            <p>
              Scared by the terrifying bombs, lots of Chinese civilians fled Nantao into nearby foreign-controlled areas, especially the French Concession since it was directly connected to Nantao <Citation entries={['fraserStatusInternationalSettlement1939', 'BOMBEDNANTAOSCENE1937']} />.
              <figure>
                <img
                  className="halfwidth"
                  src={fleeNantao}
                  alt="Les Japonais arrivent -- Les habitants fuient Nantao 9.11.1937"
                />
                <figcaption>
                  Refugees fleeing Nantao in September <Citation entries={['JaponaisArriventHabitants']} />.
                </figcaption>
              </figure>
            </p>
            <p>
              Originally, the police of the French Concession tried to push these Chinese peasants out, because the French Concession was already full of Chinese refugees (more than 20,000) from previous conflicts <Citation entries={['fraserStatusInternationalSettlement1939']} />. Refugees were blocked at the iron gate of Porte du Nord (北門), which was the primary entrance to the French Concession from Nantao.
              <figure>
                <img
                  className="halfwidth"
                  src={refugeeAtGate}
                  alt="Refugees massed behind at the Porte du Nord iron gate (French Concession)"
                />
                <figcaption>
                  Refugees massed behind at the Porte du Nord iron gate (French Concession) <Citation entries={['virtualcitiesprojectinstitutdasieorientaleRefugeesMassedPorte1937']} />.
                </figcaption>
              </figure>
              Eventually, the gates were opened and refugees flocked into the French Concession <Citation entries={['BOMBEDNANTAOSCENE1937']} />.
            </p>
          </section>

          <section>
            <h3 className="subsection">Wartime Haven</h3>
            <p>
              The foreign concession in Shanghai continued to be a haven for refugees. Before the attack on Pearl Harbour, people at the time believed that Japan would not dare to take over the foreign concessions with force, that going into war with the other “Concession Powers” would be too much of a risk for Japan <Citation entries={['fraserStatusInternationalSettlement1939']} />. However, even after Pearl Harbour, when the Japanese eventually took over the concessions, many refugees were forced to live in a compacted area called Shanghai Ghetto (officially, 無國籍難民限定地區 “Restricted Sector for Stateless Refugees”), living in harsh conditions but unharmed <Citation entries={['tokayerFuguPlanUntold2012']} />.
            </p>
            <p>
              Notably, a great number of the refugees were Jews this time, who had fled Europe into the International Settlement before 1941, when the Japanese had taken over the rest of Shanghai but allowed visa-less foreigners to enter the concessions freely.
              Nazi Germany once asked Japan to exterminate the Jewish population in the concessions, but the Japanese did not do so eventually, and because it did not want to provoke the Allies and the international Jewish community unnecessarily <Citation entries={['kearneyJewsJapaneseDomination1993', 'tokayerFuguPlanUntold2012']} />.
            </p>
            <p>
              Effectively, around 18,000 Jewish refugees lived in Shanghai Ghetto and most survived the war <Citation entries={['tokayerFuguPlanUntold2012']} />. A great number of them chose to stay in Shanghai even after the war, and most eventually left after the Communist takeover of Shanghai in 1949.
              <figure>
                <img
                  className="halfwidth"
                  src={communityKitchen}
                  alt="Community Courtyard Kitchen and Laundry, Hongkew, Shanghai, April 1946"
                />
                <figcaption>
                  Community Courtyard Kitchen and Laundry, Hongkew, Shanghai, April 1946 <Citation entries={['rothsteinCommunityCourtyardKitchen1946']} />.
                </figcaption>
              </figure>
              <figure>
                <img
                  className="halfwidth"
                  src={heim}
                  alt="Jewish communities in Shanghai established heime—German for 'homes'—or communal living shelters for the thousands of refugees that arrived from Europe during World War II, April 1946"
                />
                <figcaption>
                  Jewish communities in Shanghai established <i>heime</i> (home) or communal living shelters for the thousands of refugees that arrived from Europe during World War II. April 1946 <Citation entries={['rothsteinCommunityCourtyardKitchen1946']} />.
                </figcaption>
              </figure>
            </p>
          </section>
        </section>

        <section>
          <h2 className="section">Conclusions and personal comments</h2>
          <p>
            The motif of <em>power</em> in relation to aggression and protection is the linking strand of materials presented in this project. We have seen the ambitious British, opening treaty ports in China by violent means of war, chauvinistically imposing their interest in free trade and commerce. The other powers, France and the US, soon followed the example of Britain. Nevertheless, during rebellions like Taiping Rebellion, the concessions humanitarianly allowed Chinese to seek refuge there.
          </p>
          <p>
            After decades of unrestricted, unregulated expansion, the Concession Powers softened their assertion over the concession, with the US claiming that they hold no concession in Shanghai <Citation entries={['hudsonInternationalProblemsShanghai1927']} />, and the Municipal Council considering to return parts of the expansion to Chinese rule.
          </p>
          <p>
            During the merciless bombing of Nantao, the French Concession again opened its gates to Chinese refugees, and the Japanese, whether due to fear of Western powers or not, did not attack the concessions. When the Japanese eventually took over the entirety of Shanghai, it also allowed refugees to survive in the International Settlement, despite being asked by Nazi Germany to exterminate the Jewish population there. While the Japanese brutally massacred civilians in other cities during the war (e.g. Nanjing Massacre), the concessions Shanghai were able to largely maintain warless and peaceful, precicely because of the special political status of concessions due to the deterrence of the other Concession Powers.
          </p>
          <p>
            This power play about concessions is still found in present-day Shanghai, where I grew up. For example, many high-end restaurants, cafés, residential areas, etc. are located in the old French Concession area, and they proudly advertise themselves as being in the French Concession, inheriting its supposed cultural superiority, styling themselves using old place names to look refined. Because the Concession Powers were seen as bringing modernity and progress to China, these advertisements try to bring back the power dynamics of the past to show their own superiority. This strategy succeeds in that the popular opinion in Shanghai does not outright reject the legacy of the concessions, precicely because the advances and protection it used to bring to Shanghai, despite that we are also aware of the aggression of these powers as a result of school education.
          </p>
        </section>

        <Bibliography />
      </div>
    </Hyphenated>
  );
};

export default Home;
