import "./Main.css";
import Socials from "../Socials/Socials";

function Main() {
  return (
    <main>
      <section className="introduction tile">
        <div className="introduction-wrapper">
          <p className="superscript">Hi, my name is</p>
          <h1>Caspar van Dam</h1>
          <h3 className="subscript">Web developer</h3>
        </div>
        <Socials />
      </section>

      <section className="projects">
        <h2 className="section-title">Projects</h2>
        <ul className="projects-list">
          <li className="tile">
            <h3>Project name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              assumenda velit vitae, libero, totam consectetur deserunt illo
              minus maxime ex commodi sequi dicta laborum ipsa esse, distinctio
              error animi?
            </p>
          </li>
          <li className="tile">
            <h3>Project name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              assumenda velit vitae, libero, totam consectetur deserunt illo
              minus maxime ex commodi sequi dicta laborum ipsa esse, distinctio
              error animi?
            </p>
          </li>
          <li className="tile">
            <h3>Project name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              assumenda velit vitae, libero, totam consectetur deserunt illo
              minus maxime ex commodi sequi dicta laborum ipsa esse, distinctio
              error animi?
            </p>
          </li>
        </ul>
      </section>

      <section className="resume">
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
              <span className="function-duration">march 2025 - present</span>
            </div>
            <p>Accessify SaaS</p>
            <ul className="responsibilities">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              <li>Responsibility 3</li>
            </ul>
          </div>
        </div>
        <div className="resume-subcategory">
          <h3>Education</h3>
          <div className="education-item tile">
            <h4>Work & Organizational Psychology</h4>
            <p>Master's</p>
            <p></p>
          </div>
          <div className="education-item tile">
            <h4>Work & Organizational Psychology</h4>
            <p>Bachelors's</p>
          </div>
          <div className="education-item tile">
            <h4>Clinical & Health Psychology</h4>
            <p>Bachelors's</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
