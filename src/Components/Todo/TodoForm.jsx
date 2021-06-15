import React, { useState } from 'react';
import styles from './todo.module.css';


function TodoForm(props) {
  const [input, setInput] = useState('');


  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
            <form className={styles.form} onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                    placeholder='Task Name'
                    value={input}
                     onChange={handleChange}
                      name='text'
                       className={styles.input}
                  />
                   <button className={styles.savebtn} onClick={handleSubmit}>
                     save
                   </button>
                </>
            ): (
                <>
                <input
                    placeholder='Task Name'
                    value={input}
                     onChange={handleChange}
                      name='text'
                       className={styles.input}
                  />
                   <button className={styles.addbtn} onClick={handleSubmit}>
                     Add Task
                   </button>
                </>
            )}  
                </form>
  );
}

export default TodoForm;