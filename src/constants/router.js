import Home from "../components/Home/Home";
import OurWorks from "../components/OurWorks/OurWorks";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error";

export const Routes = {
  home: () => ({ path: `/`, text: "Home", component: Home }),
  works: () => ({
    path: `/our-works`,
    text: "Portfolio",
    component: OurWorks,
  }),
  contact: () => ({
    path: `/contact`,
    text: "Contact",
    component: Contact,
  }),
  error: () => ({ path: "*", text: "Error", component: Error }),
};