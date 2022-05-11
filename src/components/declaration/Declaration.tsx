import { Page, Document, StyleSheet, Text } from '@react-pdf/renderer';
import { english } from '../../data/dictionary';
import { DeclarationData } from '../../store/declaration/types';
import ReceiverSection from './ReceiverSection';
import SenderSection from './SenderSection';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }
});

const Declaration = (data: DeclarationData) => {
    return (
        <Document>
            <Page size='A4' orientation='landscape' style={styles.page}>
                <Text>{english["from"]}</Text>
                <SenderSection {...data.sender}></SenderSection>
                <Text>{english["to"]}</Text>
                <ReceiverSection {...data.receiver}></ReceiverSection>
            </Page>
        </Document>
    )
}

export default Declaration