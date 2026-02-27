import "./Main.css";
import Socials from "../Socials/Socials";

function Main() {
  return (
    <main>
      <section className="introduction tile">
        <div className="introduction-wrapper">
          <p className="text-tiny">Hi, my name is</p>
          <h1>Caspar van Dam</h1>
          <h3>Web developer</h3>
        </div>
        <Socials />
      </section>
      <div className="separator"></div>
      <section>
        <h2 className="section-title">Projects</h2>
        <ul className="tile-list projects">
          <li className="tile project">
            <a href="https://movies.casparvandam.com">
              <div className="project-title-wrapper">
                <h3>Movies</h3>

                <a
                  className="github-link"
                  href="https://github.com/crvdam/moviedb"
                >
                  <svg
                    fill="#000000"
                    width="800px"
                    height="800px"
                    viewBox="0.08299999684095383 1.6660000085830688 15.833999633789062 15.833999633789062"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.917 1.666V17.5h-5.15c-.424 0-.557-.238-.557-.455 0-.266.01-1.141.01-2.226a1.935 1.935 0 0 0-.552-1.502c1.808-.202 3.706-.887 3.706-4.005a3.134 3.134 0 0 0-.834-2.177 2.914 2.914 0 0 0-.081-2.147s-.68-.218-2.23.832a7.684 7.684 0 0 0-4.063 0c-1.55-1.05-2.23-.832-2.23-.832a2.918 2.918 0 0 0-.08 2.147 3.142 3.142 0 0 0-.835 2.177c0 3.11 1.894 3.806 3.696 4.011a1.737 1.737 0 0 0-.516 1.084 1.726 1.726 0 0 1-2.361-.674 1.706 1.706 0 0 0-1.243-.836s-.793-.01-.056.494a2.145 2.145 0 0 1 .9 1.187s.478 1.578 2.735 1.088c.004.676.01 1.186.01 1.38 0 .214-.147.454-.553.454H.083V1.666z"></path>{" "}
                  </svg>
                </a>
              </div>

              <ul className="skill-list">
                <li className="skill light text-tiny">Vue.js</li>
                <li className="skill light text-tiny">Pinia</li>
                <li className="skill light text-tiny">TMDB api</li>
              </ul>
            </a>
          </li>
          <li className="tile project">
            <a href="https://celebrity.casparvandam.com">
              <div className="project-title-wrapper">
                <h3>Celebrity</h3>

                <a
                  className="github-link"
                  href="https://github.com/crvdam/celebrity"
                >
                  <svg
                    fill="#000000"
                    width="800px"
                    height="800px"
                    viewBox="0.08299999684095383 1.6660000085830688 15.833999633789062 15.833999633789062"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.917 1.666V17.5h-5.15c-.424 0-.557-.238-.557-.455 0-.266.01-1.141.01-2.226a1.935 1.935 0 0 0-.552-1.502c1.808-.202 3.706-.887 3.706-4.005a3.134 3.134 0 0 0-.834-2.177 2.914 2.914 0 0 0-.081-2.147s-.68-.218-2.23.832a7.684 7.684 0 0 0-4.063 0c-1.55-1.05-2.23-.832-2.23-.832a2.918 2.918 0 0 0-.08 2.147 3.142 3.142 0 0 0-.835 2.177c0 3.11 1.894 3.806 3.696 4.011a1.737 1.737 0 0 0-.516 1.084 1.726 1.726 0 0 1-2.361-.674 1.706 1.706 0 0 0-1.243-.836s-.793-.01-.056.494a2.145 2.145 0 0 1 .9 1.187s.478 1.578 2.735 1.088c.004.676.01 1.186.01 1.38 0 .214-.147.454-.553.454H.083V1.666z"></path>{" "}
                  </svg>
                </a>
              </div>

              <ul className="skill-list">
                <li className="skill light text-tiny">Svelte</li>
                <li className="skill light text-tiny">TMDB api</li>
              </ul>
            </a>
          </li>
          <li className="tile project">
            <a href="https://realestate.casparvandam.com">
              <div className="project-title-wrapper">
                <h3>Real estate</h3>

                <a
                  className="github-link"
                  href="https://github.com/crvdam/real-estate"
                >
                  <svg
                    fill="#000000"
                    width="800px"
                    height="800px"
                    viewBox="0.08299999684095383 1.6660000085830688 15.833999633789062 15.833999633789062"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.917 1.666V17.5h-5.15c-.424 0-.557-.238-.557-.455 0-.266.01-1.141.01-2.226a1.935 1.935 0 0 0-.552-1.502c1.808-.202 3.706-.887 3.706-4.005a3.134 3.134 0 0 0-.834-2.177 2.914 2.914 0 0 0-.081-2.147s-.68-.218-2.23.832a7.684 7.684 0 0 0-4.063 0c-1.55-1.05-2.23-.832-2.23-.832a2.918 2.918 0 0 0-.08 2.147 3.142 3.142 0 0 0-.835 2.177c0 3.11 1.894 3.806 3.696 4.011a1.737 1.737 0 0 0-.516 1.084 1.726 1.726 0 0 1-2.361-.674 1.706 1.706 0 0 0-1.243-.836s-.793-.01-.056.494a2.145 2.145 0 0 1 .9 1.187s.478 1.578 2.735 1.088c.004.676.01 1.186.01 1.38 0 .214-.147.454-.553.454H.083V1.666z"></path>{" "}
                  </svg>
                </a>
              </div>

              <ul className="skill-list">
                <li className="skill light text-tiny">Vue.js</li>
                <li className="skill light text-tiny">Pinia</li>
                <li className="skill light text-tiny">Vue Router</li>
              </ul>
            </a>
          </li>
        </ul>
      </section>
      <div className="separator"></div>
      <section>
        <h2>Resume</h2>

        <div className="resume-subcategory">
          <h3>Skills</h3>
          <ul className="skill-list">
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
          <h3>Experience</h3>
          <div className="experience-item tile">
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
                Served as product owner for Accessify’s lead generation
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
          <h3>Education</h3>
          <ul className="tile-list">
            <li>
              <div className="tile">
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
              <div className="tile">
                <div className="function-wrapper">
                  <h4>Master's Work & Organizational Psychology</h4>
                  <span className="text-tiny">2014 - 2016</span>
                </div>
                <p className="text-small">Utrecht University</p>
                <p></p>
              </div>
            </li>
            <li>
              <div className="tile">
                <div className="function-wrapper">
                  <h4>Bachelor's Work & Organizational Psychology</h4>
                  <span className="text-tiny">2009 - 2013</span>
                </div>
                <p className="text-small">Utrecht University</p>
              </div>
            </li>
            <li>
              <div className="tile">
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
