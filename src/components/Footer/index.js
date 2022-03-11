import React from "react";

function Footer() {
  return (
    <footer className="footer">
    <div>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            href="https://github.com/AhmedAlkh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../assets/logos/gh-logo.png")}
              alt="Github"
              className="logo"
            ></img>
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.linkedin.com/in/ahmed-alkhatib-96599b220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../assets/logos/linked-in-logo.png")}
              alt="LinkedIn"
              className="logo"
            ></img>
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
