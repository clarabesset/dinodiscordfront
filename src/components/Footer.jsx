import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="footer-title">Made with anxiety & passion by</p>
        <a
          className="footer-title footer-name"
          href={`https://www.linkedin.com/in/camille-charpentier/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Camille
        </a>
        <p className="footer-coma">,</p>
        <br />
        <a
          className="footer-title footer-name"
          href={`https://www.linkedin.com/in/clarabesset/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Clara
        </a>
        <p className="footer-coma">, </p>
        <br />
        <a
          className="footer-title footer-name"
          href={`https://www.linkedin.com/in/gregoirelescuyer/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Grégoire
        </a>
        <br />
        <p className="footer-title">&</p>
        <br />
        <a
          className="footer-title footer-name"
          href={`https://www.linkedin.com/in/octavestoufflet/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Octave
        </a>
        <br />
        <p className="footer-title">- Enjoy the game :)</p>
      </footer>
    </div>
  );
}

export default Footer;
