import React from 'react';
import styles from './fourteenJune.module.css';
import { FcCalculator } from "react-icons/fc";
import CalcuInput from './CalcuInput';


export default function CalcuCard() {
    return (
        <div className={styles.calcucardWrapper} style={{
            backgroundImage: "url('/images/backofcalcu.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#edfaf2',
        }}>
            <h6 className={styles.statement}><span><FcCalculator className={styles.calc} /></span> Investment Calculator</h6>
            <section className={styles.calcucard}>
                <div className={styles.calcuHeader}>
                    <p>Investment Amount</p>
                    <div><CalcuInput /></div>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardBottomDiv1}>
                        <p className={styles.label}>Duration</p>
                        <p className={styles.data}>4 Months</p>
                    </div>
                    <div className={styles.cardBottomDiv2}>
                        <p className={styles.label}>Monthly Rent</p>
                        <p className={styles.data}>300,000 pkr/-</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
