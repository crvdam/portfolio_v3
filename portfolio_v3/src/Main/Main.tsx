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

      <section>
        <h2 className="section-title">Projects</h2>
        <ul className="tile-list">
          <li className="tile project">
            <a href="https://movies.casparvandam.com">
              <h3>Movies</h3>

              <ul className="skill-list">
                <li className="skill light text-tiny">Vue</li>
                <li className="skill light text-tiny">Pinia</li>
                <li className="skill light text-tiny">TMDB api</li>
              </ul>
            </a>
          </li>
          <li className="tile project">
            <a href="https://celebrity.casparvandam.com">
              <h3>Celebrity</h3>

              <ul className="skill-list">
                <li className="skill light text-tiny">Svelte</li>
                <li className="skill light text-tiny">TMDB api</li>
              </ul>
            </a>
          </li>
        </ul>
      </section>

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
                designers, and a product owner on a SaaS product the facilitates
                online platforms for B2B companies.
              </li>
              <li className="text-small">
                Implemented automatic end-to-end form testing with Playwright.
              </li>
              <li className="text-small">
                Monitored and optimized performance according to Core Web
                Vitals.
              </li>
              <li className="text-small">
                Developed templates and components based on Figma wireframes.
              </li>
              <li className="text-small">
                Served as Product Owner for Accessify’s lead generation
                platform.
              </li>
              <br></br>
            </ul>
            <ul className="skill-list">
              <li className="skill light text-small">ColdFusion</li>
              <li className="skill light text-small">JavaScript</li>
              <li className="skill light text-small">HTML</li>
              <li className="skill light text-small">CSS</li>
              <li className="skill light text-small">Figma</li>
              <li className="skill light text-small">Apache Solr</li>
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
                      <h4>CS50: Introduction to Computer Science</h4>
                      <span className="text-tiny">2021</span>
                    </div>
                    <p>HarvardX</p>
                  </li>
                  <li>
                    <div className="function-wrapper">
                      <h4>CS50: Introduction to Programming with Python</h4>
                      <span className="text-tiny">2022</span>
                    </div>
                    <p>HarvardX</p>
                  </li>
                  <li>
                    <div className="function-wrapper">
                      <h4>CS50: Web Programming with Python and JavaScript</h4>
                      <span className="text-tiny">2022</span>
                    </div>
                    <p>HarvardX</p>
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
                <p>Utrecht University</p>
                <p></p>
              </div>
            </li>
            <li>
              <div className="tile">
                <div className="function-wrapper">
                  <h4>Bachelor's Work & Organizational Psychology</h4>
                  <span className="text-tiny">2009 - 2013</span>
                </div>
                <p>Utrecht University</p>
              </div>
            </li>
            <li>
              <div className="tile">
                <div className="function-wrapper">
                  <h4>Bachelors's Clinical & Health Psychology</h4>
                  <span className="text-tiny">2009 - 2013</span>
                </div>
                <p>Utrecht University</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
