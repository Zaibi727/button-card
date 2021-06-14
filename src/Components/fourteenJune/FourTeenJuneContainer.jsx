import React from 'react';
import CalcuCard from './CalcuCard';
//import CalcuInput from './CalcuInput';
import styles from './fourteenJune.module.css';

export default function FourTeenJuneContainer() {
    return (
        <div className={styles.cardContainer}>          
           <CalcuCard/>
        </div>
    )
}
