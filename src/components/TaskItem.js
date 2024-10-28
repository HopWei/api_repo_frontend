import React from 'react';

function TaskItem({ task, onDelete, onEdit}) {
    return (
        <div style={{border: "1px solid #ddd", padding: "10px", margin: "10px 0"}}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)}>Editar</button>
            <button onClick={() => onDelete(task.id)}>Excluir</button>
        </div>
    );
}

export default TaskItem;