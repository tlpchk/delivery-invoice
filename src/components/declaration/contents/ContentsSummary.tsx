import { Text, View } from "@react-pdf/renderer"
import _ from "lodash"
import Label from "../common/Label"
import { declarationStyles } from "../Declaration"

interface ContentsSummaryProps {
    name: string
    values?: number[]
    flex?: number
    suffix?: string
    fontSize?: number
}

const ContentsSummary = ({ name, values, suffix, flex, fontSize = 7 }: ContentsSummaryProps) => {
    const sum = values ? _.sum(values) : ""

    return (<View style={[declarationStyles.outlined, { flex, textAlign: "center", justifyContent: "space-between" }]} >
        <Label fontSize={fontSize} name={name} />
        <Text style={{ fontWeight: "bold" }}>{sum}{suffix}</Text>
    </View>)
}

export default ContentsSummary