import React, { useEffect, useState } from 'react';
import { TaskProps } from '../TodoItem/TodoItem';
import classes from './style.css';

export const DescriptionPanel = ({editTask, currentTask, updateTask}: {editTask: (id: number) => void, currentTask: TaskProps, updateTask: (id: number, title: string, description: string) => void}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(currentTask?.title);
    setDescription(currentTask?.description)
  }, [currentTask?.id])

  return (
    <div className={classes.todo_area}>
      <input type="text" className={classes.input} value={title} onChange={e => {
        setTitle(e.target.value);
        updateTask(currentTask.id, e.target.value, description);
      }}/>
      <textarea className={classes.textarea} value={description} onChange={e => {
        setDescription(e.target.value); updateTask(currentTask.id, title, e.target.value);
        }}/>
    </div>
  )
}
