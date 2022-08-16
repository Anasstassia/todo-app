import React from 'react';
import classes from './style.css';

export type TaskProps = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export const data: TaskProps[] = [
   {
      id: 1,
      title: 'task1',
      description: 'todo123',
      isCompleted: false
    },
   {
      id: 2,
      title: 'task2',
      description: 'todo1234124888888888888888888888888888888888888888888888888888',
      isCompleted: true
    },
];

type TodoProps = TaskProps & {
  changeTask: (id:number) => void,
  deleteTask: (id: number) => void,
  editTask: (id: number) => void
}

export const TodoItem = ({id, title, description, isCompleted, changeTask, deleteTask, editTask}: TodoProps) => {
  return (
    <div className={`${classes.container} ${isCompleted ? classes.completed_bg : ''}`}>
      <div className={classes.text}>
        <input type="checkbox" className={classes.checkbox} onChange={() => changeTask(id)} checked={isCompleted} />
        <span className={isCompleted ? classes.completed_text : ''}> {title} </span>
      </div>
      <div className={classes.container_btns}>
        <button className={classes.edit} onClick={() => editTask(id)}></button>
        <button className={classes.delete} onClick={() => deleteTask(id)}></button>
      </div>
    </div>
  )
}
