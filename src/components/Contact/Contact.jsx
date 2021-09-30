import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
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
  socialPages,
  address,
  icon,
} from "./Contact.module.css";

const A = styled.a`
  color: cornflowerblue;
`;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className={contact}>
      <div className={contactLeft}>
        <div className={mapouter}>
          <div className={gmapCanvas}>
            <iframe
              className={mapFrame}
              title="map"
              id="gmapCanvas"
              src="https://maps.google.com/maps?q=Օդեսայի 2&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={contactRight}>
        <div className={address}>
          <address>
            <p>
              {t("email")} &nbsp;
              <A href="mailto:myecipo@gmail.com">myecipo@gmail.com</A>
            </p>
            <p>
              {t("phone")} &nbsp;
              <A href="tel:+37443560560">(374)43-560-560</A>
            </p>
            <p>
              {t("address")} &nbsp; {t("addressText")}
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
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="4x"
              className={icon}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
