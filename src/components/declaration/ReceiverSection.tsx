import { View } from "@react-pdf/renderer"
import { ReceiverData } from "../../store/declaration/types"
import { declarationStyles } from "./Declaration"
import Value from "./Value"

const ReceiverSection = (data: ReceiverData) => (
    <>
        <View style={[declarationStyles.outlined]}>
            <Value name="name" value={data.name}></Value>
        </View>
        <View style={[declarationStyles.outlined]}>
            <Value name="company" value={data.company}></Value>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 2 }]}>
                <Value name="streetAndBuilding" value={data.streetAndBuilding} />
            </View>
            <View style={[{ flex: 1 }]}>
                <Value name="district" value={data.district} />
            </View>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 1 }]}>
                <Value name="postCode" value={data.postCode} />
            </View>
            <View style={[{ flex: 1 }]}>
                <Value name="city" value={data.city}></Value>
            </View>
            <View style={[{ flex: 1 }]}>
                <Value name="region" value={data.region}></Value>
            </View>
        </View>

        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={[{ flex: 2 }]}>
                <Value name="country" value={data.country}></Value>
            </View>
            <View style={[{ flex: 1 }]}>
                <Value name="tel" value={data.tel}></Value>
            </View>
        </View>
    </>
)

export default ReceiverSection