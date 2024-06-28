/* eslint-disable react/prop-types */
import { useState } from 'react';

function Todoitemcomponent({ todo, toggleTodo, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(todo.name);

    //function to handle the updating
    const handleUpdate = () => {
        updateTodo(todo.id, newName);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <span
                        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.name}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default Todoitemcomponent;
