import React, { useState } from 'react';
import { TaskProps } from '../TodoItem/TodoItem';
import classes from './style.css';

export const DescriptionPanel = ({editTask, currentTask}: {editTask: (id: number) => void, currentTask: TaskProps}) => {
  return (
    <div className={classes.todo_area}>
      <input type="text" className={classes.input} value={currentTask?.title} />
      <textarea className={classes.textarea} value={currentTask?.description} />
    </div>
  )
}
