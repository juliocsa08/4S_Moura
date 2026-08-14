import { StyleSheet } from "react-native";
import { IconEdit } from "../../../assets/Group 1.png"
import { IconDelete } from "../../../assets/Group 2.png"


export const TaskItemStyle = StyleSheet.create({
    cardBox: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: "#31364D",
    },

    textCard: {
        paddingTop: 15,
        paddingLeft: 5,
        color: "white"
    },

    icons: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15
    },

    icon: {
        width: 36,
        height: 36,
        marginLeft: 20,
    }
})