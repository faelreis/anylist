import { useState } from "react";
import { TaskList } from "./components/TaskList";
import './Main.css'


export function Main(){

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const handleInputChange = (event) => {
      setTaskInput(event.target.value);
    };
  
    const addTask = () => {
      if (taskInput.trim() !== '') {
        const newTask = {
          id: new Date().getTime(),
          text: taskInput,
        };
  
        setTasks([...tasks, newTask]);
        setTaskInput('');
      }
    };
  
    const editTask = (taskId, newText) => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, text: newText } : task
      );
      setTasks(updatedTasks);
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    return (
      <div className='main'>
        <h1 className='main-title'>Lista de tarefas</h1>
        <div className='wrapper-input'>
            <input
            className='input-add'
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Digite uma tarefa"
            />
            <button className='btn-add' onClick={addTask}>+</button>
        </div>
        
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      </div>
    );
}