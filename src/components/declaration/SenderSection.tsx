import { View } from "@react-pdf/renderer"
import { SenderData } from "../../store/declaration/types"
import { declarationStyles } from "./Declaration"
import Value from "./Value"

const SenderSection = (data: SenderData) =>  (<>
        <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
                <View style={[declarationStyles.outlined]}>
                    <Value name="name" value={data.name}></Value>
                </View>
                <View style={[declarationStyles.outlined]}>
                    <Value name="company" value={data.company}></Value>
                </View>
            </View>
            <View style={[declarationStyles.outlined, { flex: 2 }]}>
                <Value name="senderRef" value={data.senderRef} flexTitle={5} flexValue={1}></Value>
            </View>
        </View>
        <View style={[declarationStyles.outlined]}>
            <Value name="streetAndBuilding" value={data.streetAndBuilding}></Value>
        </View>
        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
                <Value name="postCode" value={data.postCode}></Value>
            </View>
            <View style={{ flex: 1 }}>
                <Value name="city" value={data.city}></Value>
            </View>
        </View>
        <View style={[declarationStyles.outlined, { display: "flex", flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
                <Value name="country" value={data.country}></Value>
            </View>
            <View style={{ flex: 1 }}>
                <Value name="tel" value={data.tel}></Value>
            </View>
        </View>
    </>
)

export default SenderSection