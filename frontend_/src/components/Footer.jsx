import React from "react";
import { Wind } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="footer-brand">
            <Wind size={26} color="#3b82f6" />
            <span>
              AQI-EWS <strong>India</strong>
            </span>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} AQI-EWS. All rights reserved.
          </p>

          <p className="footer-disclaimer">
            <strong>Disclaimer:</strong> This platform is a research and development
            initiative. Outputs are intended for academic and informational purposes only.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-links">
          <a
            href="https://charakcenter.iiti.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charak Centre
          </a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
