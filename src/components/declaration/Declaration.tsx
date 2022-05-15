import { Page, Document, StyleSheet, Text, View } from '@react-pdf/renderer';
import { english } from '../../data/dictionary';
import { DeclarationData } from '../../store/declaration/types';
import ContentsSection from './ContentsSection';
import ReceiverSection from './ReceiverSection';
import SenderSection from './SenderSection';
import Value from './Value';


export const declarationStyles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 9,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        fontWeight: 300
    },
    outlined: {
        boxSizing: 'border-box',
        border: '1 solid black'
    }
});

const Declaration = (data: DeclarationData) => {
    return (
        <Document>
            <Page size='A3' orientation='landscape' style={declarationStyles.page}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 14 }}>
                                <View style={{ borderLeft: '1 solid black' }}>
                                    <Value name="postalAdministration" value={data.postalAdministration}></Value>
                                </View>
                            </View>
                        </View>

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
                    <View style={{ flex: 2 }} />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 24  }} >
                        <ContentsSection data={data.contents} />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Declaration