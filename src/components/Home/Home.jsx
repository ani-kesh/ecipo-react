import { useTranslation } from "react-i18next";
import LogoCube from "../Cube/Cube";
import {
  home,
  homeLeft,
  homeRight,
  aboutUs,
  aboutUsTitle,
} from "./Home.module.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={home}>
      <div className={homeLeft}>
        <LogoCube />
      </div>
      <div className={homeRight}>
        <p className={aboutUsTitle}>
          <span>{t("aboutTitle")}</span>
        </p>

        <p className={aboutUs}>{t("aboutText")}</p>
      </div>
    </div>
  );
}
