import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";
import { navbar, navmenu, logo } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navbar}>
        <div className={logo}>logo</div>
        <div className={navmenu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
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
