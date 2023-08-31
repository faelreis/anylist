import { useState } from "react";
import './Task.css'
import { FaEdit, FaTrash, FaSave, FaTimesCircle} from 'react-icons/fa';

export function Task({ task, onDelete, onEdit }) {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
  
    const handleEditClick = () => {
      setEditing(true);
    };
  
    const handleCancelClick = () => {
      setEditing(false);
      setEditedText(task.text);
    };
  
    const handleSaveClick = () => {
      onEdit(task.id, editedText);
      setEditing(false);
    };
  
    return (
      <li className='wrapper-task'>
        {editing ? (
          <>
            <input
              className='task-text'
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <div className='wrapper-methods'>
                <button onClick={handleSaveClick}><FaSave /></button>
                <button onClick={handleCancelClick}><FaTimesCircle /></button>
            </div>
          </>
        ) : (
          <>
            <p className='task-text'>{task.text}</p>
            <div className='wrapper-methods'>
                <button onClick={handleEditClick}><FaEdit /></button>
                <button onClick={() => onDelete(task.id)}><FaTrash /></button>
            </div>
          </>
        )}
      </li>
    );
  }