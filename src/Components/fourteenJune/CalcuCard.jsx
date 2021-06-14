import React from 'react';
import styles from './fourteenJune.module.css';
import { FcCalculator } from "react-icons/fc";
import CalcuInput from './CalcuInput';


export default function CalcuCard() {
    return (
        <div className={styles.calcucardWrapper} style={{
            backgroundImage: "url('/images/backofcalcu.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#edfaf2',
        }}>
            <h6 className={styles.statement}><span><FcCalculator className={styles.calc} /></span> Investment Calculator</h6>
            <table className={styles.calcucard}>
                <thead className={styles.calcuHeader}>
                    <p>Investment Amount</p>
                    <div><CalcuInput /></div>
                </thead>
                <tbody className={styles.cardBottom}>
                    <tr className={styles.cardBottomDiv1}>
                        <p className={styles.label}>Duration</p>
                        <p className={styles.data}>4 Months</p>
                    </tr>
                    <tr className={styles.cardBottomDiv2}>
                        <p className={styles.label}>Monthly Rent</p>
                        <p className={styles.data}>300,000 pkr/-</p>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
