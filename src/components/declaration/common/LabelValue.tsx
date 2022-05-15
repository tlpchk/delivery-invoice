import { View, Text } from "@react-pdf/renderer"
import Label from "./Label"

interface SectionRowProps {
    name: string
    value: string
    flexLabel?: number
    flexValue?: number
}

const LabelValue = ({ name, value, flexLabel, flexValue = 1 }: SectionRowProps) => (
    <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <Label name={name} flex={flexLabel} />
        <View style={{ flex: flexValue, textAlign: "center" }}>
            <Text style={{ fontWeight: 900 }}>{value}</Text>
        </View>
    </View>
)

export default LabelValue