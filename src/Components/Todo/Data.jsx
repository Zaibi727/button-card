import React, {useState} from 'react';
import styles from './todo.module.css';
import TodoForm  from './TodoForm';

export default function Data({todos, removeTodo, updateTodo,  handleIncrement, handleDecrement}) {
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
               <button className={styles.increment} onClick={() => handleIncrement(todo.id)}>+</button>
               <button className={styles.decrement} onClick={() => handleDecrement(todo.id)}>-</button>
            </div>
            <div className={styles.personCounter}>
                <p style={{backgroundColor: todo.count ? '#007bff' : 'yellow', color: todo.count ? 'white' : 'black'}}>Person <span>{todo.count === 0 ? "Zero" : todo.count}</span></p>
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
