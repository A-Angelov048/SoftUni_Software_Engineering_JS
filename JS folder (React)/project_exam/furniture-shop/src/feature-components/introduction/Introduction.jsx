import "./Introduction.css";
import Header from "../../core-components/header/Header";
import IntroductionInfo from "../introduction-info/IntroductionInfo";

import { useLocation } from "react-router-dom";

export default function Introduction() {
  const location = useLocation();

  return (
    <section
      className={
        location.pathname == "/" ? "introduction" : "introduction inactive"
      }
    >
      <Header />
      {location.pathname == "/" && <IntroductionInfo />}
    </section>
  );
}
