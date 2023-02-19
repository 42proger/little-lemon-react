import "./styles/Footer.css";
import Logo from "./assets/logo.jpg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt="Little Lemon logo" />
        <div className="copyright">
          <p>© {year} Little Lemon Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
