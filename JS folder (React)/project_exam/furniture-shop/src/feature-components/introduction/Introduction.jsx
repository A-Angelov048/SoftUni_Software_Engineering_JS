import styles from './Introduction.module.css'

import Header from "../../core-components/header/Header"
import IntroductionInfo from "../introduction-info/IntroductionInfo"

import { useLocation } from 'react-router-dom';

export default function Introduction() {

    const location = useLocation();

    return (

        <section className={location.pathname == '/' ? styles.introduction : styles.introduction + ' ' + styles.inactive}>
            <Header />
            {location.pathname == '/' && <IntroductionInfo />}
        </section>

    );
}