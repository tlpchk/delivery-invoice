import { View } from "@react-pdf/renderer"
import { SenderData } from "../../../store/declaration/types"
import { declarationStyles } from "../Declaration"
import LabelValue from "../common/LabelValue"

const SenderSection = (data: SenderData) =>  (<>
        <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
                <View style={[declarationStyles.outlined]}>
                    <LabelValue name="name" value={data.name}></LabelValue>
                </View>
                <View style={[declarationStyles.outlined]}>
                    <LabelValue name="company" value={data.company}></LabelValue>
                </View>
            </View>
            <View style={[declarationStyles.outlined, { flex: 1 }]}>
                <LabelValue name="senderRef" value={data.senderRef} flexLabel={2} flexValue={1}></LabelValue>
            </View>
        </View>
        <View style={[declarationStyles.outlined]}>
            <LabelValue name="streetAndBuilding" value={data.streetAndBuilding}></LabelValue>
        </View>
        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
                <LabelValue name="postCode" value={data.postCode}></LabelValue>
            </View>
            <View style={{ flex: 1 }}>
                <LabelValue name="city" value={data.city}></LabelValue>
            </View>
        </View>
        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
                <LabelValue name="country" value={data.country}></LabelValue>
            </View>
            <View style={{ flex: 1 }}>
                <LabelValue name="tel" value={data.tel}></LabelValue>
            </View>
        </View>
    </>
)

export default SenderSection