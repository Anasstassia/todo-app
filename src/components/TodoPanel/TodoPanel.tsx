import React, { useState } from 'react';
import { Button } from '../Button/Button';
import classes from './style.css';

export const TodoPanel = ({addTask}: {addTask: (title: string, description: string) => void}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
        <div className={classes.container_inputs}>  
            <input type="text" placeholder='Title' className={classes.input} value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder='Add description' value={description} className={classes.input} onChange={e => setDescription(e.target.value)}/>
        </div>
        <Button onClick={() => {addTask(title, description); setTitle(''); setDescription('')}}/>
    </>

  )
}
