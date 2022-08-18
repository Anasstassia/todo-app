import React, { useState } from 'react';
import { Button } from '../Button/Button';
import classes from './style.css';

/**
 * Компонент, который отвечает за область добавления новой заметки TODO.
 * Содержит два инпута title и description, и компонент <Button />
 */
export const TodoPanel = ({
  addTask,
}: {
  addTask: (title: string, description: string) => void;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // переменная для управления кнопкой, требуется чтобы оба input'а были заполнены
  const isDisabled = !Boolean(title && description);

  // по клику на кнопку, передаем title и description в addTask и очищаем состояние
  const handleAddTasks = () => {
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <div className={classes.container_inputs}>
        <input
          type="text"
          placeholder="Title"
          className={classes.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add description"
          value={description}
          className={classes.input}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button onClick={handleAddTasks} isDisabled={isDisabled} />
    </>
  );
};
