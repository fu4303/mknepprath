import React from "react";

import { navLinks } from "../utils/links";

import styles from "./nav.css";

export default () => (
  <nav className={styles.nav}>
    <a className={styles.siteLogo} href={"/"}>
      <img
        alt={"Michael Knepprath Memoji"}
        className={styles.img}
        src={"/static/memoji.png"}
      />
      <span>M. Knepprath</span>
    </a>
    <ul>
      {navLinks.map(({ href, key, label }) => (
        <li key={key}>
          <a
            href={href}
            rel={label === "About" ? "" : "noopener"}
            target={label === "About" ? "" : "_blank"}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
