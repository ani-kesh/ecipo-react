import { Link } from "react-router-dom";
import {
  contact,
  contactLeft,
  contactRight,
  gmapCanvas,
  mapouter,
  mapFrame,
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
        <address className="p-5 leading-loose">
          <p>
            Էլ․ փոստ`{" "}
            <Link to="mailto:myecipo@gmail.com" className="text-blue-500">
              myecipo@gmail.com
            </Link>
          </p>
          <p>
            Հեռախոս`{" "}
            <Link href="tel:+37443560560" className="text-blue-500">
              (374)43-560-560
            </Link>
          </p>
          <p>Հասցե` 31/4 Հ․ Հովսեփյան,Ներքին Շենգավիթ, 0046, Երևան, Հայաստան</p>
        </address>
      </div>
    </div>
  );
}
