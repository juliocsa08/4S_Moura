import { Text, View, Image, TouchableOpacity, Alert } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const TaskItem = ({ id, descricao }) => {
    const { deleteTask, setTaskValue, setEditMode, setIdToEdit } = useContext(TaskContext)

    const confirmDelete = () => {
        Alert.alert(
            "Excluir tarefa",
            "Tem certeza que deseja excluir esta tarefa?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => deleteTask(id)
                }
            ]
        )
    }

    return (
        <View style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.textCard}> {descricao} </Text>
            <View style={TaskItemStyle.icons}>
                <TouchableOpacity onPress={() => {
                    setTaskValue(descricao)
                    setEditMode(true)
                    setIdToEdit(id)
                }}>
                    <Image
                        source={require("../../../assets/Group 1.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>


                <TouchableOpacity onPress={confirmDelete}>
                    <Image
                        source={require("../../../assets/Group 2.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}   