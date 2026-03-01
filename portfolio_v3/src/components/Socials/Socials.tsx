import "./Socials.css";
import GitHubIcon from "../Icons/GitHubIcon";
import MailIcon from "../Icons/MailIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

function Socials() {
  return (
    <div className="socials">
      <a className="shrink" href="https://github.com/crvdam">
        <GitHubIcon />
      </a>
      <a className="shrink" href="https://www.linkedin.com/in/casparvandam/">
        <LinkedInIcon />
      </a>
      <a href="mailto:casparvandam@gmail.com">
        <MailIcon />
      </a>
    </div>
  );
}

export default Socials;
