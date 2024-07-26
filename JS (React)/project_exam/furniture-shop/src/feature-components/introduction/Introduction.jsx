import './Introduction.css'

import Header from "../../core-components/header/Header"
import IntroductionInfo from "../introduction-info/IntroductionInfo"

export default function Introduction() {

    return (

        <section className="introduction">
            <Header />
            <IntroductionInfo />
        </section>

    );
}