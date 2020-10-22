import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer container">
      <Link
        to={{pathname: `/`}}
        className={`footer__logo-link`}
      >
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  );
};

export default Footer;
