import './Main.css';
import Socials from '../Socials/Socials';
import Project from '../Project/Project';
import GlobeIcon from '../Icons/GlobeIcon';
import GitHubIcon from '../Icons/GitHubIcon';
import kanbanImage from '@/assets/kanban.webp';
import kanbanVideo from '../../assets/kanban-video.webm';

function Main() {
    return (
        <main>
            <section className="hero">
                <div className="hero-text-wrapper">
                    <h1>Caspar van Dam</h1>
                    <h3>Web developer</h3>
                    <p>
                        Hi, I'm Caspar, a fullstack developer based in
                        Amsterdam. I'm passionate about building websites that
                        are fast, beautiful, and effective. I care deeply about
                        the craft and I'm always pushing to get better at it. If
                        you have a project in mind or just want to talk,{' '}
                        <a href="mailto:casparvandam@gmail.com">
                            <strong>I'd love to hear from you.</strong>
                        </a>
                    </p>
                </div>
                <Socials />
            </section>

            <div className="separator"></div>

            <section>
                <h2 className="section-title fade-in-on-scroll">Projects</h2>
                <div className="tile featuredProject fade-in-on-scroll">
                    <div className="featuredProjectInfoWrapper">
                        <div className="featuredProjectDescription">
                            <h3 className="section-title">Casban Board</h3>
                            <p>Full-stack kanban board built with Next.js.</p>
                            <ul className="features-list">
                                <li className="text-small">
                                    Optimistic UI updates with automatic
                                    rollback on server error
                                </li>
                                <li className="text-small">
                                    Authentication with NextAuth
                                </li>
                                <li className="text-small">
                                    Drag and drop with dnd-kit
                                </li>
                                <li className="text-small">
                                    Supabase database storage
                                </li>
                            </ul>
                            <div className="featuredProjectLinks">
                                <a
                                    className="icon-link"
                                    target="_blank"
                                    href={
                                        'https://kanban-app-psi-three.vercel.app/'
                                    }
                                >
                                    <GlobeIcon />
                                </a>

                                <a
                                    className="icon-link"
                                    target="_blank"
                                    href={
                                        'https://github.com/crvdam/kanban-app'
                                    }
                                >
                                    <GitHubIcon />
                                </a>
                            </div>
                            <ul className="skill-list">
                                <li className="skill light text-tiny">
                                    Next.js
                                </li>
                                <li className="skill light text-tiny">
                                    Supabase
                                </li>
                                <li className="skill light text-tiny">
                                    NextAuth
                                </li>
                                <li className="skill light text-tiny">
                                    TanStack Query
                                </li>
                                <li className="skill light text-tiny">
                                    Prisma
                                </li>
                                <li className="skill light text-tiny">
                                    dnd-kit
                                </li>
                            </ul>
                        </div>
                        <div className="featuredProjectMediaWrapper">
                            <img src={kanbanImage}></img>
                            <video
                                src={kanbanVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                    </div>
                </div>
                <ul className="tile-list projects">
                    <Project
                        title="Messenger"
                        features={[
                            'Real-time communication through WebSockets',
                            'Authentication',
                            'Message history',
                        ]}
                        githubLink="https://github.com/crvdam/messenger"
                        techStack={[
                            'Django',
                            'Django Channels',
                            'WebSockets',
                            'JavaScript',
                        ]}
                        delay="0"
                    />
                    <Project
                        title="Movie database"
                        features={[
                            'Pinia state management',
                            'Dynamic background colors based on hero image',
                            'Endless scroll',
                        ]}
                        projectLink="https://movies.casparvandam.com"
                        githubLink="https://github.com/crvdam/moviedb"
                        techStack={['Vue', 'Pinia', 'TMDB API']}
                        delay="1"
                    />
                    <Project
                        title="Portrait game"
                        features={[
                            'Celebrity portrait guessing game',
                            'Countdown timer and highscore in local storage',
                        ]}
                        projectLink="https://celebrity.casparvandam.com"
                        githubLink="https://github.com/crvdam/celebrity"
                        techStack={['Svelte', 'TMDB API']}
                        delay="2"
                    />
                </ul>
            </section>
            <div className="separator"></div>
            <section>
                <h2 className="fade-in-on-scroll">Resume</h2>

                <div className="resume-subcategory fade-in-on-scroll skills">
                    <h3>Languages</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">
                            JavaScript / TypeScript
                        </li>
                        <li className="skill text-small">Python</li>
                        <li className="skill text-small">ColdFusion</li>
                    </ul>

                    <h3>Frontend</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">Next.js</li>
                        <li className="skill text-small">React</li>
                        <li className="skill text-small">Vue.js</li>
                    </ul>

                    <h3>Backend and Data</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">Node.js</li>
                        <li className="skill text-small">Django</li>
                        <li className="skill text-small">PostgreSQL</li>
                        <li className="skill text-small">Apache Solr</li>
                    </ul>
                    <h3>Other</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">
                            Git / GitHub (Actions)
                        </li>
                        <li className="skill text-small">Playwright</li>
                        <li className="skill text-small">Jira</li>
                        <li className="skill text-small">Figma</li>
                        <li className="skill text-small">Scrum / Agile</li>
                    </ul>
                </div>

                <div className="resume-subcategory">
                    <h3 className="fade-in-on-scroll">Experience</h3>
                    <div className="experience-item tile fade-in-on-scroll">
                        <div className="function-wrapper">
                            <h4 className="function-title">
                                Junior Front-end Developer
                            </h4>
                            <span className="text-tiny">2025 - present</span>
                        </div>
                        <p>Accessify SaaS</p>
                        <br></br>
                        <ul className="styled-list">
                            <li className="text-small">
                                Collaborated within a multidisciplinary (agile)
                                team of developers, designers and product owners
                                on a SaaS product comprising components such as
                                CMS, PIM, CRM and e-commerce.
                            </li>
                            <li className="text-small">
                                Built a fully configurable product filter that
                                uses Solr queries to let users efficiently
                                filter assortments of thousands of products,
                                configurable per client within a platform
                                serving 50+ B2B websites.
                            </li>
                            <li className="text-small">
                                Automated end-to-end testing of customer forms
                                with Playwright and GitHub Actions, surfacing
                                failures in core customer processes immediately.
                            </li>
                            <li className="text-small">
                                Acted as the primary point of contact for
                                stakeholders around the CRM and e-commerce
                                functionality, translating business needs into
                                concrete requirements and priorities.
                            </li>
                            <li className="text-small">
                                Monitored and optimized platform performance,
                                focusing on Core Web Vitals and technical SEO.
                            </li>
                            <br></br>
                        </ul>
                        <ul className="skill-list">
                            <li className="skill light text-tiny">
                                ColdFusion
                            </li>
                            <li className="skill light text-tiny">
                                JavaScript
                            </li>
                            <li className="skill light text-tiny">Jira</li>
                            <li className="skill light text-tiny">
                                Playwright
                            </li>
                            <li className="skill light text-tiny">Figma</li>
                            <li className="skill light text-tiny">
                                Apache Solr
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-subcategory">
                    <h3 className="fade-in-on-scroll">Education</h3>
                    <ul className="tile-list ">
                        <li>
                            <div className="tile fade-in-on-scroll">
                                <h4>Courses</h4>
                                <div className="function-wrapper">
                                    <div>
                                        <p className="text-small">
                                            CS50: Introduction to Computer
                                            Science
                                        </p>
                                        <p className="text-small">
                                            CS50: Introduction to Programming
                                            with Python
                                        </p>
                                        <p className="text-small">
                                            CS50: Web Programming with Python
                                            and JavaScript
                                        </p>
                                        <p className="text-small">HarvardX</p>
                                    </div>
                                    <span className="text-tiny">2021</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="tile fade-in-on-scroll">
                                <div className="function-wrapper">
                                    <h4>
                                        Master's Work & Organizational
                                        Psychology
                                    </h4>
                                    <span className="text-tiny">
                                        2014 - 2016
                                    </span>
                                </div>
                                <p className="text-small">Utrecht University</p>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <div className="tile fade-in-on-scroll">
                                <div className="function-wrapper">
                                    <h4>
                                        Bachelor's Work & Organizational
                                        Psychology
                                    </h4>
                                    <span className="text-tiny">
                                        2009 - 2013
                                    </span>
                                </div>
                                <p className="text-small">Utrecht University</p>
                            </div>
                        </li>
                        <li>
                            <div className="tile fade-in-on-scroll">
                                <div className="function-wrapper">
                                    <h4>
                                        Bachelors's Clinical & Health Psychology
                                    </h4>
                                    <span className="text-tiny">
                                        2009 - 2013
                                    </span>
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
