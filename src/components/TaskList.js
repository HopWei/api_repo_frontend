import React, { useEffect, useState } from "react";
import axios from 'axios';
import TaskItem from './TaskItem'

function TaskList({ onEdit }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error("Erro ao buscar tarefas", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error("Erro ao deletar tarefa", error);
        }
    };

    return (
        <div>
            <h3>Lista de Tarefas</h3>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onEdit={() => onEdit(task)}
                />
            ))}
        </div>
    );
}

export default TaskList;