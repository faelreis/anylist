import { Task } from "./Task";
import './TaskList.css'

export function TaskList({ tasks, onDelete, onEdit }) {
    return (
      <ul className='wrapper-list'>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    );
  }