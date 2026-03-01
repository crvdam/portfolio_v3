import GlobeIcon from "../Icons/GlobeIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import "./Project.css";

function Footer({
  title,
  projectLink,
  githubLink,
  techStack,
}: {
  title: string;
  projectLink: string;
  githubLink: string;
  techStack: string[];
}) {
  return (
    <li className="tile project fade-in-on-scroll">
      <h3>{title}</h3>

      <div>
        <a className="icon-link" href={projectLink}>
          <GlobeIcon />
        </a>
        <a className="icon-link" href={githubLink}>
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

export default Footer;
