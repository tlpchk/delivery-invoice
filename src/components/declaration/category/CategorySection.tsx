import { View } from "@react-pdf/renderer"
import { Category } from "../../../store/declaration/types"
import Label from "../common/Label"
import { declarationStyles } from "../Declaration"
import LabelCheckBox from "../common/LabelCheckBox"

interface CategorySectionProps {
    category: Category
}

const CategorySection = ({ category }: CategorySectionProps) => {
    return <View style={[declarationStyles.outlined, { flexDirection: "row" }]}>
        <View style={{ flex: 1, justifyContent: "flex-end"}}>
            <Label name="category" />
            <LabelCheckBox name="gift" checked={category === Category.GIFT} />
            <LabelCheckBox name="documents" checked={category === Category.DOCUMENT}/>
        </View>

        <View style={{ flex: 1 }}>
            <LabelCheckBox name="commercialSample" checked={category === Category.COMMERCIAL_SAMPLE}/>
            <LabelCheckBox name="returnedGoods" checked={category === Category.RETURNED_GOODS}/>
            <LabelCheckBox name="other" checked={category === Category.OTHER}/>
        </View>

    </View>
}

export default CategorySection