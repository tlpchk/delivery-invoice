import { View, StyleSheet, Text } from "@react-pdf/renderer"
import { english, ukrainian } from "../../data/dictionary"

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'space-between',
        height: 24
    },
})

interface SectionRowProps {
    name: string
    value: string
}

const SectionRow = ({ name, value }: SectionRowProps) => (
    <View style={styles.row}>
        <View>
            <Text>{english[name]}</Text>
            <Text>{ukrainian[name]}</Text>
        </View>
        <Text>{value}</Text>
    </View>
)

export default SectionRow