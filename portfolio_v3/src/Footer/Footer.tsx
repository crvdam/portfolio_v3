import Socials from "../Socials/Socials";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Socials />
      <div className="text-tiny">
        © <span>{new Date().getFullYear()}</span> - Caspar van Dam
      </div>
    </footer>
  );
}

export default Footer;
