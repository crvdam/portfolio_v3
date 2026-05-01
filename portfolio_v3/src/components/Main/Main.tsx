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
                        are fast, beautiful, and effective. Whether it's
                        crafting clean interfaces or architecting solid
                        backends, I care deeply about the craft and I'm always
                        pushing to get better at it. If you have a project in
                        mind or just want to talk,{' '}
                        <a href="mailto:casparvandam@gmail.com">
                            <strong>I'd love to hear from you.</strong>
                        </a>
                    </p>
                </div>
                <Socials />
            </section>

            <div className="separator"></div>

            <section>
                <div className="tile featuredProject fade-in-on-scroll">
                    <div className="featuredProjectInfoWrapper">
                        <div className="featuredProjectDescription">
                            <h2 className="section-title">
                                Featured project - Casban board
                            </h2>
                            <p>
                                Full-stack project management app that allows
                                multiple projects per user, with editable
                                columns and cards.
                            </p>
                            <ul className="features-list">
                                <li className="text-small">
                                    Optimistic UI updates with TanStack Query
                                    for a smooth user experience
                                </li>
                                <li className="text-small">
                                    Authentication with NextAuth
                                </li>
                                <li className="text-small">
                                    Drag and drop functionality for cards
                                </li>
                                <li className="text-small">
                                    Database storage on Supabase
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
                                    Supabase / PostgreSQL
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
                                    dnd kit
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
                <h2 className="section-title fade-in-on-scroll">
                    Other projects
                </h2>
                <ul className="tile-list projects">
                    <Project
                        title="Portrait game"
                        features={[
                            'Celebrity portrait guessing game with TMDB API',
                            'Highscore in local storage',
                        ]}
                        projectLink="https://celebrity.casparvandam.com"
                        githubLink="https://github.com/crvdam/celebrity"
                        techStack={['Svelte', 'TMDB api']}
                        delay="0"
                    />
                    <Project
                        title="Movie database"
                        features={[
                            'TMDB API',
                            'Pinia state management',
                            'Dynamic background colors based on hero image',
                        ]}
                        projectLink="https://movies.casparvandam.com"
                        githubLink="https://github.com/crvdam/moviedb"
                        techStack={['Vue', 'Pinia', 'TMDB api']}
                        delay="1"
                    />
                    <Project
                        title="Real estate database"
                        features={[
                            'Pinia state management',
                            'View, sort, filter house listings',
                            'Creating listings no longer available',
                        ]}
                        projectLink="https://realestate.casparvandam.com"
                        githubLink="https://github.com/crvdam/real-estate"
                        techStack={['Vue', 'Pinia', 'Vue Router']}
                        delay="2"
                    />
                    <Project
                        title="Messenger"
                        features={[
                            'Authentication and message storage with Django back-end',
                            'Real-time communication with WebSockets (Django Channels)',
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
                        title="Terminal Hangman"
                        features={['Hangman CLI game with Merriam-Webster API']}
                        githubLink="https://github.com/crvdam/hangman"
                        techStack={['Python', 'Merriam-Webster api']}
                        delay="1"
                    />
                </ul>
            </section>
            <div className="separator"></div>
            <section>
                <h2 className="fade-in-on-scroll">Resume</h2>

                <div className="resume-subcategory fade-in-on-scroll skills">
                    <h3>Languages</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">TypeScript</li>
                        <li className="skill text-small">Python</li>
                        <li className="skill text-small">ColdFusion</li>
                    </ul>

                    <h3>Frameworks / libraries</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">Next.js</li>
                        <li className="skill text-small">React</li>
                        <li className="skill text-small">Vue.js</li>
                        <li className="skill text-small">Svelte</li>
                        <li className="skill text-small">Django</li>
                    </ul>

                    <h3>Database and search</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">Supabase</li>
                        <li className="skill text-small">PostgreSQL</li>
                        <li className="skill text-small">
                            Apache Solr / Lucene
                        </li>
                    </ul>
                    <h3>Other</h3>
                    <ul className="skill-list">
                        <li className="skill text-small">Playwright</li>
                        <li className="skill text-small">Jira</li>
                        <li className="skill text-small">Figma</li>
                        <li className="skill text-small">
                            GitHub / GitHub Actions
                        </li>
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
                                Collaborated with a multidisciplinary team of
                                developers, designers, and a product owner on a
                                SaaS product used to build online platforms for
                                B2B clients.
                            </li>
                            <li className="text-small">
                                Implemented automated end-to-end tests with
                                Playwright.
                            </li>
                            <li className="text-small">
                                Monitored and optimized Core Web Vitals for
                                client's online platforms.
                            </li>
                            <li className="text-small">
                                Developed templates and components based on
                                Figma wireframes.
                            </li>
                            <li className="text-small">
                                Served as product owner for Accessify's lead
                                generation platform.
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
                            <li className="skill light text-tiny">HTML</li>
                            <li className="skill light text-tiny">CSS</li>
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
                                <ul className="styled-list">
                                    <li>
                                        <div className="function-wrapper">
                                            <p className="text-small">
                                                CS50: Introduction to Computer
                                                Science
                                            </p>
                                            <span className="text-tiny">
                                                2021
                                            </span>
                                        </div>
                                        <p className="text-small">HarvardX</p>
                                    </li>
                                    <li>
                                        <div className="function-wrapper">
                                            <p className="text-small">
                                                CS50: Introduction to
                                                Programming with Python
                                            </p>
                                            <span className="text-tiny">
                                                2022
                                            </span>
                                        </div>
                                        <p className="text-small">HarvardX</p>
                                    </li>
                                    <li>
                                        <div className="function-wrapper">
                                            <p className="text-small">
                                                CS50: Web Programming with
                                                Python and JavaScript
                                            </p>
                                            <span className="text-tiny">
                                                2022
                                            </span>
                                        </div>
                                        <p className="text-small">HarvardX</p>
                                    </li>
                                </ul>
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
