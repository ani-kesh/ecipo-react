import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  contact,
  contactLeft,
  contactRight,
  gmapCanvas,
  mapouter,
  mapFrame,
  link,
  socialPages,
  address,
  icon,
} from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={contact}>
      <div className={contactLeft}>
        <div className={mapouter}>
          <div className={gmapCanvas}>
            <iframe
              className={mapFrame}
              title="map"
              id="gmapCanvas"
              src="https://maps.google.com/maps?q=31/4%20h.hovsepian&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={contactRight}>
        <div className={address}>
          <address>
            <p>
              Էլ․ փոստ` &nbsp;
              <Link to="mailto:myecipo@gmail.com" className={link}>
                myecipo@gmail.com
              </Link>
            </p>
            <p>
              Հեռախոս` &nbsp;
              <Link to="tel:+37443560560" className={link}>
                (374)43-560-560
              </Link>
            </p>
            <p>
              Հասցե` &nbsp; 31/4 Հ․ Հովսեփյան,Ներքին Շենգավիթ, 0046, Երևան,
              Հայաստան
            </p>
          </address>
        </div>

        <div className={socialPages}>
          <Link
            to={{ pathname: "https://www.facebook.com/Ecipo-100738855384466/" }}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="4x"
              className={icon}
            />
          </Link>
          <Link
            to={{ pathname: "https://www.instagram.com/myecipo/" }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="4x" className={icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}
