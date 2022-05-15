import { View } from "@react-pdf/renderer"
import Label from "../common/Label"
import { declarationStyles } from "../Declaration"

interface TitleProps {
    name: string,
    flex?: number
}

const ContentsHeaderLabel = ({ name, flex }: TitleProps) => (
    <View style={[
        declarationStyles.outlined,
        { textAlign: "center", justifyContent: "center", flex }
    ]}><Label name={name}/>
    </View>
)

export default ContentsHeaderLabel