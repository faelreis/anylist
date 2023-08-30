import { useState } from "react";

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
      <li>
        {editing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleSaveClick}>Salvar</button>
            <button onClick={handleCancelClick}>Cancelar</button>
          </>
        ) : (
          <>
            {task.text}
            <button onClick={handleEditClick}>Editar</button>
            <button onClick={() => onDelete(task.id)}>Excluir</button>
          </>
        )}
      </li>
    );
  }