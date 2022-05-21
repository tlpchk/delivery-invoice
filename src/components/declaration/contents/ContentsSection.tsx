import { View } from "@react-pdf/renderer";
import { ContentData } from "../../../store/declaration/types";
import { declarationStyles } from "../Declaration";
import ContentAttribute from "./ContentAttribute";
import ContentsHeaderLabel from "./ContentsHeaderLabel";
import ContentsSummary from "./ContentsSummary";


interface ContentsSectionProps {
    data: Array<ContentData>
}

const ContentsSection = ({ data: contents }: ContentsSectionProps) => (
    <View>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flex: 14 }}>
                <ContentsHeaderLabel name={"contentsDesc"} flex={6} />
                <ContentsHeaderLabel name={"quantity"} flex={1} />
            </View>

            <View style={{ flexDirection: "row", flex: 10 }}>
                <ContentsHeaderLabel name={"weight"} flex={1} />
                <ContentsHeaderLabel name={"value"} flex={1} />

                <View style={{ flex: 4 }}>
                    <ContentsHeaderLabel name={"commercialsItemsOnly"} />
                    <View style={{ flexDirection: "row" }}>
                        <ContentsHeaderLabel name={"hsTariffNumber"} flex={1} />
                        <ContentsHeaderLabel name={"countryOfOrigin"} flex={1} />
                    </View>
                </View>
            </View>
        </View>

        {contents.map((data, idx) => (
            <View key={idx} style={{ flexDirection: "row" }} >
                <View style={{ flexDirection: "row", flex: 14 }}>
                    <ContentAttribute flex={6} value={data.contentsDesc} />
                    <ContentAttribute flex={1} value={data.quantity} />
                </View>

                <View style={{ flexDirection: "row", flex: 10 }}>

                    <ContentAttribute flex={1} value={data.weight} />
                    <ContentAttribute flex={1} value={data.value} />

                    <View style={{ flexDirection: "row", flex: 4 }}>
                        <ContentAttribute flex={1} value={data.hsTariffNumber} />
                        <ContentAttribute flex={1} value={data.countryOfOrigin} />
                    </View>
                </View>
            </View>
        ))}

        <View style={[declarationStyles.outlined, { flexDirection: "row" }]} >
            <View style={{ flexDirection: "row", flex: 14 }} />

            <View style={{ flexDirection: "row", flex: 10 }}>
                <ContentsSummary
                    flex={1}
                    name={"totalWeight"}
                    values={contents.map(c => Number(c.weight))}
                    suffix=" kg"/>

                <ContentsSummary
                    flex={1}
                    name={"totalPrice"}
                    values={contents.map(c => Number(c.value))}
                    suffix=" EUR"/>

                <ContentsSummary
                    flex={4}
                    name={"postalFees"}/>
            </View>
        </View>
    </View>
)

export default ContentsSection