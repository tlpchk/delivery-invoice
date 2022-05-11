import { Box, Button } from "@mui/material";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { english } from "../../data/dictionary";
import { useAppSelector } from "../../store/hooks";
import Declaration from "./Declaration";
import { useCyrilicFonts, useScrollToTheBottom } from "./declarationHooks";


const DeclarationWrapper = () => {
    const { isPopulated, data } = useAppSelector((state) => state.declaration)
    useCyrilicFonts()
    useScrollToTheBottom(isPopulated)

    const Doc = <Declaration {...data} />
    
    return isPopulated ? (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} textAlign="center">
                <PDFViewer width="1000" height="600" >
                    {Doc}
                </PDFViewer>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }} textAlign="center">
                <PDFDownloadLink document={Doc}>
                    {({ blob, url, loading, error }) => (
                        <Button disabled={loading} variant="outlined" >
                            {loading ? english["loadingInvoice"] : english["download"]}
                        </Button>)}
                </PDFDownloadLink>
            </Box>
        </>
    ) : <></>
}

export default DeclarationWrapper