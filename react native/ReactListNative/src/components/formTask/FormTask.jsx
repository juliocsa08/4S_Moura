import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyle } from "./FormTaskStyles"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {
    // const [taskValue, setTaskValue] = useState("")

    const {
        postTasks,
        taskValue,
        setTaskValue,
        editMode, setEditMode,
        setIdToEdit,
        idToEdit,
        putTaskConfirm } = useContext(TaskContext)

    const saveTask = async () => {
        if (taskValue.trim() === "") {
            Alert.alert("Atenção, Digite uma tarefa");
            return;
        }

        await postTasks(taskValue)

        Alert.alert("Titulo da Janela", `${taskValue} cadastrado com sucesso`, [
            {
                text: "OK",
                onPress: () => { }
            }
        ])

        setTaskValue("")
    }

    return (
        <View style={FormTaskStyle.formTaskBox}>
            <TextInput
                style={FormTaskStyle.textInputName}
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
                placeholder="Adicione uma tarefa"
            />

            {/* SALVAR */}

            <TouchableOpacity
                style={FormTaskStyle.taskButton}
                onPress={() => {
                    if (editMode) {
                        const savePut = putTaskConfirm({ id: idToEdit, descricao: taskValue })
                        if (savePut) {
                            Alert.alert("Tarefa Editada!", `Novo nome da tarefa: ${taskValue}`, [{ text: "OK", }])
                        }
                        else
                            Alert.alert("Editar", `Erro ao editar`, [{ text: "OK", }])
                    }
                    else
                        saveTask()
                }}
            >
                <Text style={FormTaskStyle.taskButtonText}> Salvar </Text>
            </TouchableOpacity>

            {/* CANCELAR */}
            {editMode && (
                <TouchableOpacity
                    style={FormTaskStyle.taskButton}
                    onPress={() => {
                        setEditMode(false)
                        setIdToEdit(0)
                        setTaskValue("")
                    }}
                >
                    <Text style={FormTaskStyle.taskButtonText}> Cancelar </Text>
                </TouchableOpacity>
            )}


        </View>
    )
}