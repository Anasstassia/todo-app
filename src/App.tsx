import React from 'react'
import classes from './style.css';
import {Header} from './components/Header/Header';
import {TodoItem, todos} from './components/TodoItem/TodoItem';
import {Input} from './components/Input/Input';
import {Button} from './components/Button/Button';

export const App = () => <div className={classes.container}>
   <Header />
   <div className={classes.container_add}>
      <Input />
      <Button />
   </div>
   <div className={classes.container}>
      {todos.map(todo => (<TodoItem key={todo.key} description={todo.description} isCompleted={todo.isCompleted} />))}
   </div>
</div>
