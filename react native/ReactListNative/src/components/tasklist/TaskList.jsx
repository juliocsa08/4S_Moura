import { ScrollView } from "react-native"
import { TaskListStyle } from "./TaskListStyte"
import { TaskItem } from "../taskitem/TaskItem"
import { useContext, useEffect } from "react"
import { TaskContext } from "../../context/TaskContext"

export const TaskList = () => {

    const { listagemTarefas, getTasks } = useContext(TaskContext)

    //Ciclo de Vida
    useEffect(() => {
        getTasks()
    }, [])

    return (
        <ScrollView style={TaskListStyle.taskListContainer}>
            {listagemTarefas.map((tarefa) => {
                return (
                    < TaskItem
                        key={tarefa.id}
                        id={tarefa.id}
                        descricao={tarefa.descricao}
                    />
                )
            })}
        </ScrollView>
    )
}