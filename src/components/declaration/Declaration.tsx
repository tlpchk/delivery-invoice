import { Page, Document, StyleSheet, Text, View } from '@react-pdf/renderer';
import { english } from '../../data/dictionary';
import { DeclarationData } from '../../store/declaration/types';
import ContentsSection from './contents/ContentsSection';
import CustomsDeclarationHeader from './CustomsDeclarationHeader';
import GeneralSection from './general/GeneralSection';
import ReceiverSection from './sender/ReceiverSection';
import SenderSection from './receiver/SenderSection';
import LabelValue from './common/LabelValue';
import CategorySection from './category/CategorySection';
import Label from './common/Label';
import FooterSection from './footer/FooterSection';


export const declarationStyles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 9,
        padding: 60,
        fontWeight: "light",
    },
    outlined: {
        border: '1 solid black'
    },
    header: {
        backgroundColor: "#B3AC86",
        color: 'white',
        fontWeight: 900
    },
    declarationId: {
        backgroundColor: "#E2EFD9",
        fontWeight: 900,
        fontSize: 15,
        padding: 2
    }
});

const Declaration = (data: DeclarationData) => {
    return (
        <Document>
            <Page size='A3' orientation='landscape' style={declarationStyles.page}>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 7 }}>
                        <View style={{ borderLeft: '1 solid black' }}>
                            <LabelValue name="postalAdministration" value={data.postalAdministration}></LabelValue>
                        </View>
                    </View>
                    <View style={{ flex: 10 }} />
                    <View style={{ flex: 7 }}>
                        <CustomsDeclarationHeader />
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ flex: 1, borderTop: '1 solid black', textAlign: "center" }}>{english["from"]}</Text>
                            <View style={{ flex: 14 }}>
                                <SenderSection {...data.sender}></SenderSection>
                            </View>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ flex: 1, borderTop: '1 solid black', textAlign: "center" }}>{english["to"]}</Text>
                            <View style={{ flex: 14 }}>
                                <ReceiverSection {...data.receiver}></ReceiverSection>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <GeneralSection {...data.general} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 24 }} >
                        <ContentsSection data={data.contents} />
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ flex: 13 }}>
                                <CategorySection category={data.category} />
                            </View>
                            <View style={{ flex: 11, flexDirection: "row" }}>
                                <View style={[declarationStyles.outlined, {flex: 1}]}>
                                    <Label name="explanation" />
                                </View>
                                <View style={[declarationStyles.outlined, { flex: 2 }]}>
                                    <Label name="officeAndDateOfPosting" />
                                </View>
                            </View>
                        </View>
                        <FooterSection />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Declaration