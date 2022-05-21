import { View, Text } from "@react-pdf/renderer"
import Label from "./Label"
import { declarationStyles } from "../Declaration"

interface CategoryRowProps {
    name: string
    checked?: boolean
    optionLabelFlex?: number
    optionBoxFlex?: number
}


const LabelCheckBox = ({ name, checked = false, optionBoxFlex = 1, optionLabelFlex = 11 }: CategoryRowProps) => {
    const value = checked ? "X" : ""
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={[
                declarationStyles.outlined,
                { flex: optionBoxFlex, justifyContent: "center", textAlign: "center", fontSize: 14, fontWeight: "black" }]
            }>
                <Text>{value}</Text>
            </View>
            <View style={{ flex: optionLabelFlex, padding: "2" }}>
                <Label name={name} />
            </View>
        </View>)
}

export default LabelCheckBox