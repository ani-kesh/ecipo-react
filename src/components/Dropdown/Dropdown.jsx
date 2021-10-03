import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  container,
  selectedText,
  optionContainer,
  selectedOption,
  option,
  icon,
} from "./Dropdown.module.css";

export default function Dropdown({ options, selected }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={container}>
      <div className={selectedOption}>
        <span className={selectedText}>
          {selected ? selected : options[0].name}
        </span>
        {toggle ? (
          <FontAwesomeIcon
            icon={faAngleUp}
            onClick={() => setToggle(!toggle)}
            className={icon}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={() => setToggle(!toggle)}
            className={icon}
          />
        )}
      </div>
      {toggle ? (
        <div className={optionContainer}>
          {options.map(({ id, name }) => {
            return (
              <div key={id} className={option}>
                {name}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
