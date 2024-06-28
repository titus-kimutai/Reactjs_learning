import { useCallback, useReducer, useState } from "react";
import { todoReducer } from "../0.useReducer/reducers/todoReducer";
import { ACTIONS } from "../0.useReducer/actions/actions";
import Todoitemcomponent from "./Todoitem.component";

function ToDocomponent() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [name, setName] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (name.trim() === "") return;
            dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
            setName("");  // Clear input after adding todo
        },
        [name, dispatch]
    );

    const toggleTodo = useCallback(
        (id) => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
        },
        [dispatch]
    );

    const deleteTodo = useCallback(
        (id) => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
        },
        [dispatch]
    );

    const updateTodo = useCallback(
        (id, name) => {
            dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id, name } });
        },
        [dispatch]
    );

    return (
        <div>
            <h3>This is a todo List</h3>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Add Todo"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Create Todo</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <Todoitemcomponent
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDocomponent;
