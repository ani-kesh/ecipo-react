import React from "react";
import { useTranslation } from "react-i18next";
import { nanoid } from "nanoid";
import {
  container,
  block,
  blockText,
  textHead,
  textQuote,
  blockImg,
  subMenu,
} from "./OurWorks.module.css";

export default function OurWorks() {
  const { t } = useTranslation();
  const images = Array(10).fill("");

  return (
    <div className={container}>
      <p className={subMenu}>
        <span>{t("windows")}</span>
      </p>

      {images?.map((el, ind) => {
        return (
          <div className={block} key={nanoid()}>
            <img
              src={require(`../../assets/img/window/${ind + 1}.jpg`).default}
              alt="door"
              className={blockImg}
            />
            <div className={blockText}>
              <div className={textHead}>Ecipo</div>
              <div className={textQuote}>
              {t("slogan")}
              </div>
            </div>
          </div>
        );
      })}

      <p className={subMenu}>
        <span>{t("doors")}</span>
      </p>
      {images.map((el, ind) => {
        return (
          <div className={block} key={nanoid()}>
            <img
              src={require(`../../assets/img/door/${ind + 1}.jpg`).default}
              alt="door"
              className={blockImg}
            />
            <div className={blockText}>
              <div className={textHead}>Ecipo</div>
              <div className={textQuote}>
                {t("slogan")}
              </div>
            </div>
          </div>
        );
      })}

      <p className={subMenu}>
        <span>{t("showerCabin")}</span>
      </p>
      {images.map((el, ind) => {
        return (
          <div className={block} key={nanoid()}>
            <img
              src={
                require(`../../assets/img/shower_cabin/${ind + 1}.jpg`).default
              }
              alt="door"
              className={blockImg}
            />
            <div className={blockText}>
              <div className={textHead}>Ecipo</div>
              <div className={textQuote}>
              {t("slogan")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
