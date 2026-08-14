import { Text, View } from "react-native"
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {
    return (
        <View style={HeaderStyle.header} >
            <Text style={HeaderStyle.headerText} > Todo List </Text>
        </View> 
    )
}