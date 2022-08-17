import React, { useEffect, useState } from 'react'
import classes from './style.css';
import {Header} from './components/Header/Header';
import {TodoItem, data} from './components/TodoItem/TodoItem';
import {TodoPanel} from './components/TodoPanel/TodoPanel';
import {DescriptionPanel} from './components/DescriptionPanel/DescriptionPanel';

export const App = () => {
   const [tasks, setTasks] = useState(data);

   const [currentTaskId, setCurrentTaskId] = useState<number>();

   const addTask = (title: string, description: string) => {
      const newId = Math.floor(Math.random() * 1000);
      const newTasks = [...tasks, {id: newId, title, description, isCompleted: false}]
      setTasks(newTasks);
   };

   const changeTask = (id: number) => {
      const newTasks =  tasks.map(task => task.id === id ? 
         {...task, isCompleted: !task.isCompleted} 
         : task)
      setTasks(newTasks);
   };

   const deleteTask = (id: number) => {
      const newTasks =  tasks.filter(task => task.id !== id);
      setTasks(newTasks);
   };

   const editTask = (id: number) => {
     setCurrentTaskId(id);
   }

   const updateTask = (id: number, title: string, description: string) => {
      const newTasks =  tasks.map(task => task.id === id ? 
         {...task, title, description} 
         : task)
      setTasks(newTasks);
   }
   
   return <div className={classes.container}>
      <Header />
      <div className={classes.container_add}>
         <TodoPanel addTask={addTask}/>
      </div>
      <div className={classes.area_container}>
         <div className={classes.container}>
            {tasks.map(todo => (
               <TodoItem key={todo.id} id={todo.id}  title={todo.title} description={todo.description} isCompleted={todo.isCompleted} changeTask={changeTask} deleteTask={deleteTask} editTask={editTask}/>
            ))}
         </div>
         <DescriptionPanel editTask={editTask} updateTask={updateTask} currentTask={tasks.find(task => task.id === currentTaskId)}/>
      </div>
   </div>
};
