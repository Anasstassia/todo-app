import React, { useState } from 'react';
import classes from './style.css';
import { Header } from './components/Header/Header';
import { TaskProps, TodoItem } from './components/TodoItem/TodoItem';
import { TodoPanel } from './components/TodoPanel/TodoPanel';
import { DescriptionPanel } from './components/DescriptionPanel/DescriptionPanel';

/**
 * App главный компонент приложения, в нем рендерятся остальные компоненты
 */
export const App = () => {
  // Используем хуки для обновления списка заметок TODO и запоминания id выбранной заметки
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<number>();

  // функция, отвечающая за добавление новой заметки в массив всех заметок
  const addTask = (title: string, description: string) => {
    const newId = Math.floor(Math.random() * 1000);
    const newTasks = [
      ...tasks,
      { id: newId, title, description, isCompleted: false, isPending: false },
    ];
    setTasks(newTasks);
  };

  // функция, отвечающая за изменение статуса исполнения заметки на "выполнено"
  const changeTask = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  // функция, отвечающая за изменение статуса исполнения заметки на "в процессе"
  const changeTaskProgress = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isPending: !task.isPending } : task
    );
    setTasks(newTasks);
  };

  // функция, отвечающая за удаление заметки из массива всех заметок
  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // функция, отвечающая за передачу id выбранной заметки для ее редактирования
  const editTask = (id: number) => {
    setCurrentTaskId(id);
  };

  // функция, отвечающая за обновление названия и описания заметки
  const updateTask = (id: number, title: string, description: string) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, title, description } : task));
    setTasks(newTasks);
  };

  // функция, возращающая выбранную пользователем заметку
  const getCurrentTask = () => tasks.find((el) => el.id === currentTaskId);

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.container_add}>
        <TodoPanel addTask={addTask} />
      </div>
      <div className={classes.area_container}>
        <div className={classes.container}>
          {/* отображение списка всех заметок */}
          {tasks.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
              isPending={todo.isPending}
              changeTask={changeTask}
              changeTaskProgress={changeTaskProgress}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </div>
        <DescriptionPanel
          editTask={editTask}
          updateTask={updateTask}
          currentTask={getCurrentTask()}
        />
      </div>
    </div>
  );
};
