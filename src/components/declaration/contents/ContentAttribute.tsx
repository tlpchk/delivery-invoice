import { Text } from "@react-pdf/renderer";
import { declarationStyles } from "../Declaration";

interface ContentAttributeProps {
    value?: string
    flex?: number
}

const ContentAttribute = ({ value, flex }: ContentAttributeProps) => (
    <Text style={[
        declarationStyles.outlined,
        { flex, textAlign: 'center', lineHeight: 2, fontWeight: 500 }
    ]}>{value}</Text>
)


export default ContentAttribute