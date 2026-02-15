import Socials from "../Socials/Socials";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Socials />
      <div className="text-tiny">
        © <span>{new Date().getFullYear()}</span> - Caspar van Dam
      </div>
      <a
        style={{ visibility: "hidden", position: "absolute" }}
        href="https://www.flaticon.com/free-icons/code"
        title="code icons"
      >
        Favicon created by juicy_fish - Flaticon
      </a>
    </footer>
  );
}

export default Footer;
