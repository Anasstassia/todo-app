import React from 'react';
import classes from './style.css';

export const Input = () => {
  return(
    <input type="text" placeholder='Add new task' className={classes.input}/>
  )
}
