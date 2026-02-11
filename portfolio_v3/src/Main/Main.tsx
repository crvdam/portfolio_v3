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
            <h3>Recipes</h3>
            <p className="text-small">
              A recipe website built with Next.js that fetches and displays meal
              data from TheMealDB API.
            </p>
          </li>
          <li className="tile project">
            <h3>Portrait</h3>
            <p className="text-small">
              A guessing game built with Svelte where players identify blurred
              celebrity portraits using data from the TMDb API.
            </p>
          </li>
          <li className="tile project">
            <h3>Real-estate</h3>
            <p className="text-small">
              A real estate front-end built with Vue that allows users to
              search, filter, create, and edit property listings, using Pinia
              for state management and Vue Router for navigation.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Resume</h2>

        <div className="resume-subcategory">
          <h3>Skills</h3>
          <ul className="skill-list">
            <li className="skill">TypeScript</li>
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
            </ul>
          </div>
        </div>
        <div className="resume-subcategory">
          <h3>Education</h3>
          <ul className="tile-list">
            <li>
              <div className="tile">
                <h4>Master's Work & Organizational Psychology</h4>
                <p>Utrecht University</p>
                <p></p>
              </div>
            </li>
            <li>
              <div className="tile">
                <h4>Bachelor's Work & Organizational Psychology</h4>
                <p>Utrecht University</p>
              </div>
            </li>
            <li>
              <div className="tile">
                <h4>Bachelors's Clinical & Health Psychology</h4>
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
