import { useTranslation } from "react-i18next";
import { footer } from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return <div className={footer}>{t("footerText")}</div>;
}
