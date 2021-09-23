import React from "react";
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
  const images = Array(10).fill("");

  return (
    <div className={container}>
      <p className={subMenu}>
        <span>Պատուհաններ</span>
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
                ՈՐԱԿՅԱԼ <br /> ԵՎ <br />
                ԺԱՄԱՆԱԿԻՆ
              </div>
            </div>
          </div>
        );
      })}

      <p className={subMenu}>
        <span>Դռներ</span>
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
                ՈՐԱԿՅԱԼ <br /> ԵՎ <br />
                ԺԱՄԱՆԱԿԻՆ
              </div>
            </div>
          </div>
        );
      })}

      <p className={subMenu}>
        <span>Լոգախցիկներ</span>
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
                ՈՐԱԿՅԱԼ <br /> ԵՎ <br />
                ԺԱՄԱՆԱԿԻՆ
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
