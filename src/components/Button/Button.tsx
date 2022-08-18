import React from 'react';
import classes from './style.css';

// тип для аргументов, которые принимает кнопка добавления новой заметки TODO
type ButtonProps = { onClick: () => void; isDisabled: boolean };

// компонент кнопки добавления новой заметки TODO
export const Button = ({ onClick, isDisabled }: ButtonProps) => {
  return (
    <button className={classes.button} onClick={() => onClick()} disabled={isDisabled}></button>
  );
};
