import React from 'react';
import classes from './style.css';

type ButtonProps = {onClick: () => void, isDisabled: boolean}

export const Button = ({onClick, isDisabled}: ButtonProps) => {
  return (
    <button className={classes.button} onClick={() => onClick()} disabled={isDisabled}></button>
  )
}

