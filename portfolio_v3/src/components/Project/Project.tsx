import GlobeIcon from '../Icons/GlobeIcon';
import GitHubIcon from '../Icons/GitHubIcon';
import './Project.css';

function Project({
    title,
    features,
    projectLink,
    githubLink,
    techStack,
    delay,
}: {
    title: string;
    features: string[] | undefined;
    projectLink?: string;
    githubLink: string;
    techStack: string[];
    delay: string;
}) {
    return (
        <li className={`tile project fade-in-on-scroll delay-${delay}`}>
            <h3>{title}</h3>
            {features && (
                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li className="text-small" key={index}>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
            <div>
                {projectLink && (
                    <a className="icon-link" href={projectLink} target="_blank">
                        <GlobeIcon />
                    </a>
                )}

                <a className="icon-link" href={githubLink} target="_blank">
                    <GitHubIcon />
                </a>
            </div>
            <ul className="skill-list">
                {techStack.map((tech) => (
                    <li className="skill light text-tiny">{tech}</li>
                ))}
            </ul>
        </li>
    );
}

export default Project;
