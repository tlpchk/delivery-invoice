import { View } from "@react-pdf/renderer";
import { ContentData } from "../../store/declaration/types";
import ContentAttribute from "./ContentAttribute";
import Title from "./Title";


interface ContentsSectionProps {
    data: Array<ContentData>
}

const ContentsSection = ({ data: contents }: ContentsSectionProps) => (
    <>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flex: 14 }}>
                <Title name={"contentsDesc"} flex={2} />
                <Title name={"quantity"} flex={1} />
            </View>

            <View style={{ flexDirection: "row", flex: 10 }}>
                <Title name={"weight"} flex={1} />
                <Title name={"value"} flex={1} />

                <View style={{ flex: 4 }}>
                    <Title name={"commercialsItemsOnly"} />
                    <View style={{ flexDirection: "row" }}>
                        <Title name={"hsTariffNumber"} flex={1} />
                        <Title name={"countryOfOrigin"} flex={1} />
                    </View>
                </View>
            </View>
        </View>

        {contents.map(data => (
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", flex: 14 }}>
                    <ContentAttribute flex={2} value={data.contentsDesc} />
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
    </>)

export default ContentsSection