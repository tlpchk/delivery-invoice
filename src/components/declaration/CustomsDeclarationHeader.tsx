import { View, Text } from "@react-pdf/renderer"
import Label from "./common/Label"
import { declarationStyles } from "./Declaration"


const CustomsDeclarationHeader = () => {
    return (
        <View style={[declarationStyles.header, { flexDirection: "row", fontSize: 11, padding: 3, justifyContent: "space-around", alignItems: "center" }]}>
            <Label name={"customsDeclaration"} />
            <Text>CN 23</Text>
        </View>
    )
}

export default CustomsDeclarationHeader