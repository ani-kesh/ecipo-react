import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  lang
} from "./Nav.module.css";

export default function Nav() {
  const {  i18n,  } = useTranslation();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogo = () => {
    history.push(Routes.home().path);
  };

  return (
    <header className={header}>
      <div className={logo} onClick={handleLogo}>
        Ecipo
      </div>
      <nav className={`${toggle ? navMobile : nav}`}>
        <ul>
          {Object.values(Routes).map((fn) => {
            const { path, text } = fn();
            return !path.includes("*") ? (
              <li key={nanoid()} onClick={() => setToggle(false)}>
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

      <select className={lang} onChange={(ev) => changeLanguage(ev.target.value)}>
        <option value="arm">Arm</option>
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </select>
    </header>
  );
}
