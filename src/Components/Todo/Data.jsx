import React, {useState} from 'react';
import styles from './todo.module.css';
import TodoForm  from './TodoForm';

export default function Data({todos, removeTodo, updateTodo,  handleIncrement, handleDecrement, count}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
      }


    return todos.map((todo, index) => (
        <div key={index} className={styles.datawrapper}>
           <div>
               <button className={styles.increment} onClick={() => handleIncrement()}>+</button>
               <button className={styles.decrement} onClick={() => handleDecrement()}>-</button>
            </div>
            <div className={styles.personCounter}>
                <p style={{backgroundColor: count ? '#007bff' : 'yellow', color: count ? 'white' : 'black'}}>Person <span>{count === 0 ? "Zero" : count}</span></p>
            </div>
          <div key={todo.id}>
            {todo.text}
          </div>
          <div>
             <button className={styles.edit} onClick={() => setEdit({ id: todo.id, value: todo.text })}>edit</button>   
             <button className={styles.delete}  onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ));
  };
