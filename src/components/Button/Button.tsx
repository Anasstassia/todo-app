import React from 'react';
import classes from './style.css';

type ButtonProps = {onClick: () => void}

export const Button = ({onClick}: ButtonProps) => {
  return (
    <button className={classes.button} onClick={() => onClick()}> + </button>
  )
}

