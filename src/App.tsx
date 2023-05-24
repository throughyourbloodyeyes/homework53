import React, { useState } from 'react';
import Task from './Task/Task';
import AddTaskForm from './AddTaskForm/AddTaskForm';

interface Tasks {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: '1', text: 'qwe' },
    { id: '2', text: 'zxc' },
    { id: '3', text: 'qze' },
  ]);

  const handleAddTask = (text: string) => {
    const newTask: Tasks = {
      id: Math.random().toString(),
      text: text,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTaskForm onAdd={handleAddTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default App;

