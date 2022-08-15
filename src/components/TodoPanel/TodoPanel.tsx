import React, { useState } from 'react';
import classes from './style.css';

export const TodoPanel = () => {
  const [description, setDescription] = useState('');

  console.log(description);
  return (
    <div className={classes.container_inputs}>  
        <input type="text" placeholder='Title' className={classes.input} />
        <input type="text" placeholder='Add description' className={classes.input} />
    </div>
  )
}
