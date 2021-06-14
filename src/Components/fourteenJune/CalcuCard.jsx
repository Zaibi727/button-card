import React from 'react';
import styles from './fourteenJune.module.css';
import { FcCalculator } from "react-icons/fc";
import CalcuInput from './CalcuInput';


export default function CalcuCard() {
    return (
        <div className={styles.calcucardWrapper}>
            <p className={styles.statement}><span><FcCalculator className={styles.calc} /></span> Investment Calcutor</p>
            <section className={styles.calcucard}>
                <div className={styles.calcuHeader}>
                    <p>Investment Amount</p>
                    <div><CalcuInput /></div>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardBottomDiv1}>
                        <p>Duration</p>
                        <p>4 Months</p>
                    </div>
                    <div className={styles.cardBottomDiv2}>
                        <p>Monthly Rent</p>
                        <p>300,000 pkr/-</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
