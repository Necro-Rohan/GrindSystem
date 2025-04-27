import React from "react";
import { SiCodechef } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src="/grindsystem-logo2.png"
          alt="GrindSystem Logo"
          className="footer-logo"
        />
        <h3>GrindSystem v1.0</h3>
        <p>Developed by Rohan Kumar</p>
        <p>Inspired by the world of Solo Leveling</p>
        <p>© 2025 SYSTEM. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <h4>System Links</h4>
        <div className="underline"></div>
        <ul>
          <li>
            <a href="mailto:rohan.kumar@adypu.edu.in" target="_blank">
              Support
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Privacy Policy
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.codechef.com/users/hungrydevourer"
            target="_blank"
          >
            <SiCodechef size={24} />
          </a>
          <a href="https://github.com/Necro-Rohan" target="_blank">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/rohan_gupta_c53/?hl=en"
            target="_blank"
          >
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohan-kumar-2b2ab9326/" target="_blank">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
