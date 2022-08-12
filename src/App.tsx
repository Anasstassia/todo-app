import React from 'react'
import classes from './style.css';
import {Header} from './components/Header/Header';
import {TodoItem, todos} from './components/TodoItem/TodoItem';

export const App = () => <div className={classes.container}>
   <Header />
   <div className="class.container">
      {todos.map(todo => (<TodoItem key={todo.key} description={todo.description} isCompleted={todo.isCompleted} />))}
   </div>
</div>
