import React, { useState, useEffect} from "react";
import axios from 'axios';

function TaskForm({ selectedTask, onTaskSaved}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [selectedTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = {title, description};

        try {
            if (selectedTask) {
                await axios.put(`http://localhost:5000/api/tasks/${selectedTask.id}`, taskData);
            } else {
                await axios.post('http://localhost:5000/api/tasks', taskData);
            }
            onTaskSaved();
        } catch (error) {
            console.error("Erro ao salvar a tarefa", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{margin: "20px 0"}}>
            <h3>{selectedTask ? "Editar Tarefa" : "Nova Tarefa"}</h3>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            
            <input
                type="text"
                
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{selectedTask ? "Atualizar" : "Adicionar"}</button>
        </form>
    );
}

export default TaskForm;