import { View, Text } from "@react-pdf/renderer"
import { GeneralData } from "../../../store/declaration/types"
import Label from "../common/Label"
import LabelValue from "../common/LabelValue"
import { declarationStyles } from "../Declaration"

const GeneralSection = (data: GeneralData) => (<View style={{flex:1, flexDirection: "column", justifyContent: "space-between"}}>
    <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Label name={"declarationId"} flex={3} />
            <Label name={"mayBeOpened"} flex={2} />
        </View>
        <View style={declarationStyles.declarationId}>
            <Text>№ {data.declarationId}</Text>
        </View>
    </View>

    <View>
        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center"}}>
            <Label name={"agentCode"} flex={1} />
            <Text style={[declarationStyles.outlined, {flex: 1, fontWeight: "medium"}]}>Spedizioni</Text>
            <Text style={[declarationStyles.outlined, {flex: 3, fontWeight: "medium"}]}>{data.agentCode}</Text>
        </View>
        <View style={declarationStyles.outlined}>
            <LabelValue name={"importerReference"} value={data.importerReference} flexLabel={3}/>
        </View>
        <View style={declarationStyles.outlined}>
            <LabelValue name={"importerContact"} value={data.importerContact}  flexLabel={2} flexValue={3} />
        </View>
    </View>
</View>)

export default GeneralSection