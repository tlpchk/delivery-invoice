import { View, Text } from "@react-pdf/renderer";
import { english, ukrainian } from "../../../data/dictionary";

interface LabelProps {
    name: string
    flex?: number
}

const Label = ({ name, flex }: LabelProps) => (
    <View style={{ flex }}>
        <Text>{english[name]}</Text>
        <Text>{ukrainian[name]}</Text>
    </View>
)

export default Label;