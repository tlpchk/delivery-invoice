import { View, Text } from "@react-pdf/renderer";
import { english, ukrainian } from "../../../data/dictionary";

interface LabelProps {
    name: string
    flex?: number
    fontSize?: number
}

const Label = ({ name, flex, fontSize }: LabelProps) => (
    <View style={{ flex, fontSize }}>
        <Text>{english[name]}</Text>
        <Text>{ukrainian[name]}</Text>
    </View>
)

export default Label;