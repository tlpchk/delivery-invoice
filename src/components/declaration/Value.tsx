import { View, Text } from "@react-pdf/renderer"
import { english, ukrainian } from "../../data/dictionary"

interface SectionRowProps {
    name: string
    value: string
    flexTitle?: number
    flexValue?: number
}

const Value = ({ name, value, flexTitle, flexValue = 1 }: SectionRowProps) => (
    <View style={{ flexDirection: 'row', alignItems:"center" }}>
        <View style={{ flex: flexTitle }}>
            <Text >{english[name]}</Text>
            <Text >{ukrainian[name]}</Text>
        </View>
        <View style={{ flex: flexValue, textAlign: "center"}}>
            <Text style={{fontWeight: 900 }}>{value}</Text>
        </View>
    </View>
)

export default Value