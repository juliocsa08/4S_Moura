import { StyleSheet } from "react-native";


export const HeaderStyle = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 110,
        backgroundColor: '#1D2131',
        // borderWidth: 3,
        // borderStyle: "solid",
        // borderColor: "red"
    },

    headerText: {
        width: "45%",
        textAlign: "center",
        paddingBottom: 10,
        fontSize: 24,
        color: "white",
        borderBottomWidth: 3,
        borderBottomStyle: "solid",
        borderBottomColor: "#60A771"
    }
})