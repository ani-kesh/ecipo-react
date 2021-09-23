import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Routes } from "../../constants/router";
import {
  header,
  link,
  nav,
  toggleIcon,
  navMobile,
  logo,
} from "./Nav.module.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={header}>
      <div className={logo}>Ecipo</div>
      <nav className={`${toggle ? navMobile : nav}`}>
        <ul>
          {Object.values(Routes).map((fn) => {
            const { path, text } = fn();
            return !path.includes("*") ? (
              <li key={nanoid()}>
                <Link to={path} className={link}>
                  {text}
                </Link>
              </li>
            ) : (
              <React.Fragment key={nanoid()}></React.Fragment>
            );
          })}
        </ul>
      </nav>
      <div className={toggleIcon}>
        {toggle ? (
          <FontAwesomeIcon icon={faTimes} onClick={() => setToggle(!toggle)} />
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
        )}
      </div>
    </header>
  );
}
