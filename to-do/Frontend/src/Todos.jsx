import React, { useState } from 'react';

export function Todos({ todos }) {
    const [todosState, setTodosState] = useState(todos);

    const handleToggleCompleted = (id) => {
        // Update the state by toggling the completed status for the specific todo
        setTodosState((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            {todosState.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleToggleCompleted(todo.id)}>
                        {todo.completed === true ? 'completed' : 'Mark as completed'}
                    </button>
                </div>
            ))}
        </div>
    );
}
