import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-class">
      <div className="customer-support">
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
      <p>© Your Website 2023. All Rights Reserved</p>
      </div>

        <div className="icons">
          <FaFacebook className="social-icon" size={45}  />
          <FaTwitter className="social-icon" size={45} />
          <FaInstagram  className="social-icon" size={45} />
        </div>
      
    </div>
  );
}

export default Footer;
