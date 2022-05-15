import { View } from "@react-pdf/renderer"
import { ReceiverData } from "../../../store/declaration/types"
import { declarationStyles } from "../Declaration"
import LabelValue from "../common/LabelValue"

const ReceiverSection = (data: ReceiverData) => (
    <>
        <View style={[declarationStyles.outlined]}>
            <LabelValue name="name" value={data.name}></LabelValue>
        </View>
        <View style={[declarationStyles.outlined]}>
            <LabelValue name="company" value={data.company}></LabelValue>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 2 }]}>
                <LabelValue name="streetAndBuilding" value={data.streetAndBuilding} />
            </View>
            <View style={[{ flex: 1 }]}>
                <LabelValue name="district" value={data.district} />
            </View>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 1 }]}>
                <LabelValue name="postCode" value={data.postCode} />
            </View>
            <View style={[{ flex: 1 }]}>
                <LabelValue name="city" value={data.city}></LabelValue>
            </View>
            <View style={[{ flex: 1 }]}>
                <LabelValue name="region" value={data.region}></LabelValue>
            </View>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 2 }]}>
                <LabelValue name="country" value={data.country}></LabelValue>
            </View>
            <View style={[{ flex: 1 }]}>
                <LabelValue name="tel" value={data.tel}></LabelValue>
            </View>
        </View>
    </>
)

export default ReceiverSection