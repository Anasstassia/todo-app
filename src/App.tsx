import React, { useState } from 'react'
import classes from './style.css';
import {Header} from './components/Header/Header';
import {TodoItem, data} from './components/TodoItem/TodoItem';
import {Input} from './components/Input/Input';
import {Button} from './components/Button/Button';

export const App = () => {
   const [tasks, setTasks] = useState(data);

   const changeTask = (id: number) => {
      const newTasks =  tasks.map(task => task.id === id ? 
         {...task, isCompleted: !task.isCompleted} 
         : task)
      setTasks(newTasks);
   }

   const deleteTask = (id: number) => {
      const newTasks =  tasks.filter(task => task.id !== id);
      setTasks(newTasks);
   }

   
   
   return <div className={classes.container}>
      <Header />
      <div className={classes.container_add}>
         <Input />
         <Button />
      </div>
      <div className={classes.container}>
         {tasks.map(todo => (
            <TodoItem key={todo.id} id={todo.id}  description={todo.description} isCompleted={todo.isCompleted} changeTask={changeTask} deleteTask={deleteTask}/>
         ))}
      </div>
   </div>
};
