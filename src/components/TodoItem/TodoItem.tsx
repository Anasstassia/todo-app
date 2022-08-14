import React from 'react';
import classes from './style.css';

type TaskProps = {
  id: number;
  description: string;
  isCompleted: boolean;
};

export const data: TaskProps[] = [
   {
      id: 1,
      description: 'todo123',
      isCompleted: false
    },
   {
      id: 2,
      description: 'todo1234124',
      isCompleted: true
    },
];

type TodoProps = TaskProps & {
  changeTask: (id:number) => void,
  deleteTask: (id: number) =>void
}

export const TodoItem = ({id, description, isCompleted, changeTask, deleteTask}: TodoProps) => {
  return (
    <div className={`${classes.container} ${isCompleted ? classes.completed_bg : ''}`}>
      <div>
        <input type="checkbox" className={classes.checkbox} onChange={() => changeTask(id)} checked={isCompleted} />
        <span className={isCompleted ? classes.completed_text : ''}> {description} </span>
      </div>
      <div className={classes.container_btns}>
        <button className={classes.edit}></button>
        <button className={classes.delete} onClick={() => deleteTask(id)}></button>
      </div>
    </div>
  )
}
