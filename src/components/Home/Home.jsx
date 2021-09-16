import { Logo } from "../Logo/Logo";
import { home, homeLeft, homeRight, aboutUs,aboutUsTitle } from "./Home.module.css";

export default function Home() {
  return (
    <div className={home}>
      <div className={homeLeft}></div>
      <div className={homeRight}>
        <span className={aboutUsTitle}>Մեր մասին</span>
        <p className={aboutUs}>
          «Ecipo» ընկերությունը հանդիսանում է Հայաստանի Հանրապետության խոշոր
          շինարարական ընկերություններից: Իր գործունեության տարիների ընթացքում
          ընկերությունը արդարացի դրսևորվել է որպես հուսալի գործընկեր՝
          իրականացնելով ցանկացած տիպի շինարարական աշխատանքներ: Ընկերությունը
          հիմնադրվել է 1990 թ.-ին: Մենք ունենք հսկայական փորձ կատարելու համալիր
          շինարարական աշխատանքներ ցանկացած ուղղություններով։
        </p>
        <Logo />
      </div>
    </div>
  );
}
