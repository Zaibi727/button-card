import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Data from './Data';
import DateTime from './DateTime';
import styles from './todo.module.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleIncrement = () => {
    setCount(count + 1)
}

const handleDecrement = () => {
    setCount(count - 1)
}
const handleReset = () => {
    setCount(count === 0);
}

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
          <p>Enter Task</p>
             <TodoForm onSubmit={addTodo} 
            />
            <button className={styles.resetbtn} onClick={handleReset}>Reset Number of Persons</button>
            <div>
               <DateTime />
            </div>
      </div>
      <div className={styles.data}>
      <Data 
          todos={todos}
          completeTodo={completeTodo}
         removeTodo={removeTodo}
         updateTodo={updateTodo}
         count={count}
         handleIncrement={handleIncrement}
         handleDecrement={handleDecrement}
      />
      </div>
    </div>
  );
}

export default TodoList;