import axios from "axios"
import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [idToEdit, setIdToEdit] = useState(0)

    const getTasks = async () => {
        try {
            const APIReturn = await axios.get("http://172.16.36.58:3000/taskpoint")
            const APIData = await APIReturn.data
            setListagemTarefas(APIData)
        } catch (error) {
            console.log(error);
            console.log("Erro ao buscar os dados da api");
        }
    }

    const postTasks = async (descricao) => {
        try {
            const APIReturn = await axios.post("http://172.16.36.58:3000/taskpoint", {
                descricao: descricao
            })
            const APIData = await APIReturn.data

            console.log(APIData);

            getTasks()

        } catch (error) {
            console.log(error);
        }
    }

    const putTaskPreview = async (tarefa) => {
        try {

        } catch (error) {

        }
    }

    const putTaskConfirm = async (tarefa) => {
        try {
            await axios.put(`http://172.16.36.58:3000/taskpoint/${tarefa.id}`, {
                descricao: tarefa.descricao
            })

            getTasks()
            setTaskValue("")
            setIdToEdit(0)
            setEditMode(false)

            return true

        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const APIReturn = await axios.delete(`http://172.16.36.58:3000/taskpoint/${id}`)
            const APIData = await APIReturn.data

            console.log(APIData);

            getTasks()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{
            taskValue,
            editMode,
            setEditMode,
            setTaskValue,
            listagemTarefas,
            getTasks,
            postTasks,
            deleteTask,
            putTaskPreview,
            putTaskConfirm,
            idToEdit,
            setIdToEdit,
        }}>
            {children}
        </TaskContext.Provider>
    )
}