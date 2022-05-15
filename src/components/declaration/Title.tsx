import { View, Text } from "@react-pdf/renderer"
import { english, ukrainian } from "../../data/dictionary"
import { declarationStyles } from "./Declaration"

interface TitleProps {
    name: string,
    flex?: number
}

const Title = ({ name, flex }: TitleProps) => (
    <View style={[
        declarationStyles.outlined,
        { textAlign: "center", justifyContent: "center", flex }
    ]}>
        <Text>{english[name]}</Text>
        <Text>{ukrainian[name]}</Text>
    </View>
)

export default Title