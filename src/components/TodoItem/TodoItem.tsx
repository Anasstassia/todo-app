import React from 'react';
import classes from './style.css';

type TaskProps = {
  key: number;
  description: string;
  isCompleted: boolean;
};

export const todos: TaskProps[] = [
   {
      key: 1,
      description: 'todo123',
      isCompleted: false
    },
   {
      key: 2,
      description: 'todo1234124',
      isCompleted: true
    },
];

export const TodoItem = (todo: TaskProps) => {
  return (
    <div className={classes.container}>
      <input type="checkbox" className={classes.checkbox} ></input>
      {todo.description}
    </div>
  )
}
