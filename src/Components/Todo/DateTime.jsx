import  React, { useState , useEffect } from 'react';
import styles from './todo.module.css';

 const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={styles.datetime}>
            <p>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime;