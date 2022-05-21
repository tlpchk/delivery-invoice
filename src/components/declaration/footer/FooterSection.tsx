import { View, Text } from "@react-pdf/renderer"
import { english, ukrainian } from "../../../data/dictionary"
import Label from "../common/Label"
import LabelCheckBox from "../common/LabelCheckBox"
import { declarationStyles } from "../Declaration"

const FooterSection = () => (
    <View style={[declarationStyles.outlined, { flexDirection: "row" }]}>
        <View style={[declarationStyles.outlined, { flex: 4 }]}>
            <Text style={[declarationStyles.header, { padding: 2, fontSize: 11 }]}>{ukrainian["receiver"]}</Text>
            <View style={{ padding: 3 }}>
                <Text style={{ margin: 20, fontWeight: "medium", textAlign: "center" }}>{ukrainian["receiverMessage"]}</Text>
                <Text>{ukrainian["passport"]}:</Text>
                <Text>{ukrainian["serie"]} _____№______________</Text>
                <Text>{ukrainian["date"]} ______________________</Text>
                <Text>{ukrainian["signature"]} ____________________</Text>
            </View>
        </View>
        <View style={[declarationStyles.outlined, { flex: 13.5, flexDirection: "column" }]}>
            <Label name={"comments"} flex={1}></Label>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={[declarationStyles.outlined, { flex: 1 }]}>
                    <LabelCheckBox name={"licence"} optionLabelFlex={6.5}></LabelCheckBox>
                </View>
                <View style={[declarationStyles.outlined, { flex: 1.5 }]}>
                    <LabelCheckBox name={"certificate"}></LabelCheckBox>
                </View>
                <View style={[declarationStyles.outlined, { flex: 1 }]}>
                    <LabelCheckBox name={"invoice"} optionLabelFlex={6.5}></LabelCheckBox>
                </View>
            </View>
        </View>

        <View style={[declarationStyles.outlined, { flex: 6.5 }]}>
            <Text style={[declarationStyles.header, { padding: 2, fontSize: 11 }]}>{english["sender"]}/{ukrainian["sender"]}</Text>
            <View style={{ padding: 3 }}>
                <Label name="senderMessage" fontSize={8} />
                <Label name="senderDateAndSignature" fontSize={8} />
            </View>
        </View>
    </View>
)

export default FooterSection