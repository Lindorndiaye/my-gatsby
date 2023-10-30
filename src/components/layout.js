import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";
import { navbar, navmenu, logo } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navbar}>
        <div className={logo}>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
            src="../images/logo_lindor_black-300x83.png"
          />
        </div>
        <div className={navmenu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/realisations">Realisation</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
