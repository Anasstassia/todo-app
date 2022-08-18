import React, { useState } from 'react';
import classes from './style.css';

// тип полей объекта, соответствующий описанию заметки TODO
export type TaskProps = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isPending: boolean;
};

// тип передаваемых данных компоненту TodoItem
type TodoProps = TaskProps & {
  changeTask: (id: number) => void;
  changeTaskProgress: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
};

// компонент, отображающий разметку новой заметки TODO
export const TodoItem = ({
  id,
  title,
  isCompleted,
  isPending,
  changeTask,
  changeTaskProgress,
  deleteTask,
  editTask,
}: TodoProps) => {
  return (
    <div
      className={`${classes.container} ${
        // в зависимости от статуса заметки, выбирается стиль блока
        isCompleted ? classes.completed_bg : isPending ? classes.progress_bg : ''
      }`}
    >
      <div className={classes.text}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={() => changeTask(id)}
          checked={isCompleted}
        />
        {/* в зависимости от статуса заметки, выбирается стиль текста */}
        <span className={isCompleted ? classes.completed_text : ''}> {title} </span>
      </div>
      <div className={classes.container_btns}>
        <button
          aria-label="InProgress"
          title="In progress"
          // в зависимости от статуса заметки, выбирается стиль блока
          className={`${classes.progress} ${isPending ? classes.active : ''}`}
          onClick={() => changeTaskProgress(id)}
        ></button>
        <button
          aria-label="Edit"
          title="Edit"
          className={classes.edit}
          onClick={() => editTask(id)}
        ></button>
        <button
          aria-label="Delete"
          title="Delete"
          className={classes.delete}
          onClick={() => deleteTask(id)}
        ></button>
      </div>
    </div>
  );
};
