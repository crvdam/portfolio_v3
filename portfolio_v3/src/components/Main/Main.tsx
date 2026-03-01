import "./Main.css";
import Socials from "../Socials/Socials";
import GlobeIcon from "../Icons/GlobeIcon";
import GitHubIcon from "../Icons/GitHubIcon";

function Main() {
  return (
    <main>
      <section className="introduction tile">
        <div className="introduction-wrapper">
          <h1>Caspar van Dam</h1>
          <h3>Web developer</h3>
        </div>
        <Socials />
      </section>
      <div className="separator"></div>
      <section>
        <h2 className="section-title fade-in-on-scroll">Projects</h2>
        <ul className="tile-list projects">
          <li className="tile project fade-in-on-scroll">
            <div className="project-title-wrapper">
              <h3>Movies database front-end</h3>
              <a className="icon-link" href="https://movies.casparvandam.com">
                <GlobeIcon />
              </a>
              <a className="icon-link" href="https://github.com/crvdam/moviedb">
                <GitHubIcon />
              </a>
            </div>
            <ul className="skill-list">
              <li className="skill light text-tiny">Vue.js</li>
              <li className="skill light text-tiny">Pinia</li>
              <li className="skill light text-tiny">TMDB api</li>
            </ul>
          </li>
          <li className="tile project fade-in-on-scroll delay-1">
            <div className="project-title-wrapper">
              <h3>Celebrity guessing game</h3>
              <a
                className="icon-link"
                href="https://celebrity.casparvandam.com"
              >
                <GlobeIcon />
              </a>
              <a
                className="icon-link"
                href="https://github.com/crvdam/celebrity"
              >
                <GitHubIcon />
              </a>
            </div>
            <ul className="skill-list">
              <li className="skill light text-tiny">Svelte</li>
              <li className="skill light text-tiny">TMDB api</li>
            </ul>
          </li>
          <li className="tile project fade-in-on-scroll delay-2">
            <div className="project-title-wrapper">
              <h3>Real estate database front-end</h3>
              <a
                className="icon-link"
                href="https://realestate.casparvandam.com"
              >
                <GlobeIcon />
              </a>
              <a
                className="icon-link"
                href="https://github.com/crvdam/real-estate"
              >
                <GitHubIcon />
              </a>
            </div>
            <ul className="skill-list">
              <li className="skill light text-tiny">Vue.js</li>
              <li className="skill light text-tiny">Pinia</li>
              <li className="skill light text-tiny">Vue Router</li>
            </ul>
          </li>
        </ul>
      </section>
      <div className="separator"></div>
      <section>
        <h2>Resume</h2>

        <div className="resume-subcategory fade-in-on-scroll">
          <h3 className="fade-in-on-scroll">Skills</h3>
          <ul className="skill-list fade-in-on-scroll">
            <li className="skill">TypeScript</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">React</li>
            <li className="skill">Vue.js</li>
            <li className="skill">Svelte</li>
            <li className="skill">Next.js</li>
            <li className="skill">Python</li>
            <li className="skill">Django</li>
            <li className="skill">Figma</li>
            <li className="skill">Git</li>
            <li className="skill">Apache Solr</li>
            <li className="skill">ColdFusion</li>
          </ul>
        </div>

        <div className="resume-subcategory">
          <h3 className="fade-in-on-scroll">Experience</h3>
          <div className="experience-item tile fade-in-on-scroll">
            <div className="function-wrapper">
              <h4 className="function-title">Junior Front-end Developer</h4>
              <span className="text-tiny">2025 - present</span>
            </div>
            <p>Accessify SaaS</p>
            <br></br>
            <ul className="styled-list">
              <li className="text-small">
                Collaborated with a multidisciplinary team of developers,
                designers, and a product owner on a SaaS product used to build
                online platforms for B2B clients.
              </li>
              <li className="text-small">
                Implemented automated end-to-end tests with Playwright.
              </li>
              <li className="text-small">
                Monitored and optimized Core Web Vitals for client's online
                platforms.
              </li>
              <li className="text-small">
                Developed templates and components based on Figma wireframes.
              </li>
              <li className="text-small">
                Served as product owner for Accessify's lead generation
                platform.
              </li>
              <br></br>
            </ul>
            <ul className="skill-list">
              <li className="skill light text-tiny">ColdFusion</li>
              <li className="skill light text-tiny">JavaScript</li>
              <li className="skill light text-tiny">HTML</li>
              <li className="skill light text-tiny">CSS</li>
              <li className="skill light text-tiny">Figma</li>
              <li className="skill light text-tiny">Apache Solr</li>
            </ul>
          </div>
        </div>
        <div className="resume-subcategory">
          <h3 className="fade-in-on-scroll">Education</h3>
          <ul className="tile-list ">
            <li>
              <div className="tile fade-in-on-scroll">
                <h4>Courses</h4>
                <ul className="styled-list">
                  <li>
                    <div className="function-wrapper">
                      <p className="text-small">
                        CS50: Introduction to Computer Science
                      </p>
                      <span className="text-tiny">2021</span>
                    </div>
                    <p className="text-small">HarvardX</p>
                  </li>
                  <li>
                    <div className="function-wrapper">
                      <p className="text-small">
                        CS50: Introduction to Programming with Python
                      </p>
                      <span className="text-tiny">2022</span>
                    </div>
                    <p className="text-small">HarvardX</p>
                  </li>
                  <li>
                    <div className="function-wrapper">
                      <p className="text-small">
                        CS50: Web Programming with Python and JavaScript
                      </p>
                      <span className="text-tiny">2022</span>
                    </div>
                    <p className="text-small">HarvardX</p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="tile fade-in-on-scroll">
                <div className="function-wrapper">
                  <h4>Master's Work & Organizational Psychology</h4>
                  <span className="text-tiny">2014 - 2016</span>
                </div>
                <p className="text-small">Utrecht University</p>
                <p></p>
              </div>
            </li>
            <li>
              <div className="tile fade-in-on-scroll">
                <div className="function-wrapper">
                  <h4>Bachelor's Work & Organizational Psychology</h4>
                  <span className="text-tiny">2009 - 2013</span>
                </div>
                <p className="text-small">Utrecht University</p>
              </div>
            </li>
            <li>
              <div className="tile fade-in-on-scroll">
                <div className="function-wrapper">
                  <h4>Bachelors's Clinical & Health Psychology</h4>
                  <span className="text-tiny">2009 - 2013</span>
                </div>
                <p className="text-small">Utrecht University</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="separator"></div>
    </main>
  );
}

export default Main;
