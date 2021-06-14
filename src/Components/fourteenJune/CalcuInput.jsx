import React,{useState} from 'react';
import styles from './fourteenJune.module.css';

export default function CalcuInput() {
   const [input, setInput] = useState('');

   const handleChange= e => {
       setInput(e.target.value);
   }

    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="text"
                    placeholder="add amount"
                    value={input}
                    onChange={handleChange}
                    className={styles.input}
                />
                <span className={styles.pkr}>Pkr</span>
            </form>
        </div>
    )
}
