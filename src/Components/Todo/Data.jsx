import React, {useState} from 'react';
import styles from './todo.module.css';
import TodoForm  from './TodoForm';

export default function Data({todos, completeTodo, removeTodo, updateTodo}) {
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
               <button>+</button>
               <button>-</button>
            </div>
            <div>
                person counter
            </div>
          <div key={todo.id}>
            {todo.text}
          </div>
          <div>
             <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>edit</button>   
             <button  onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ));
  };
