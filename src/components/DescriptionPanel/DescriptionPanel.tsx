import React, { useEffect, useState } from 'react';
import { TaskProps } from '../TodoItem/TodoItem';
import classes from './style.css';

// компонет, который отображает заголовок и описание заметки TODO
export const DescriptionPanel = ({
  editTask,
  currentTask,
  updateTask,
}: {
  editTask: (id: number) => void;
  currentTask: TaskProps;
  updateTask: (id: number, title: string, description: string) => void;
}) => {
  // хуки, которые содержат значения заголовка и описания заметки из input'ов
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // хук, помогающий извлекать из переданной заметки заголовок и описание
  useEffect(() => {
    setTitle(currentTask?.title);
    setDescription(currentTask?.description);
  }, [currentTask?.id]);

  // разметка компонента
  return (
    <div className={classes.todo_area}>
      <input
        type="text"
        className={classes.input}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          updateTask(currentTask.id, e.target.value, description);
        }}
      />
      <textarea
        className={classes.textarea}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          updateTask(currentTask.id, title, e.target.value);
        }}
      />
    </div>
  );
};
