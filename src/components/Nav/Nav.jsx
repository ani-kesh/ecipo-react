import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Routes } from "../../constants/router";
import { Languages } from "../../constants/languages";
import Dropdown from "../Dropdown/Dropdown";
import {
  header,
  link,
  nav,
  toggleIcon,
  navMobile,
  logo,
  lang,
} from "./Nav.module.css";

export default function Nav() {
  const { i18n, t } = useTranslation();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(Languages[1].name);
  }, [i18n]);

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
          <li onClick={() => setToggle(false)}>
            <Link to={Routes.home().path} className={link}>
              {t("home")}
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link to={Routes.works().path} className={link}>
              {t("work")}
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link to={Routes.contact().path} className={link}>
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={toggleIcon}>
        {toggle ? (
          <FontAwesomeIcon icon={faTimes} onClick={() => setToggle(!toggle)} />
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
        )}
      </div>
      <div className={lang}>
        <Dropdown options={Languages} selected={Languages[1].name} onSelect={changeLanguage}/>
      </div>

      {/* <select
        className={lang}
        onChange={(ev) => changeLanguage(ev.target.value)}
        value={i18n.language}
      >
        <option value="arm">Arm</option>
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </select> */}
    </header>
  );
}
