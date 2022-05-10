import { PDFViewer } from "@react-pdf/renderer";
import { useAppSelector } from "../../store/hooks";
import Declaration from "./Declaration";

const DeclarationView = () => {
    const { isPopulated, data } = useAppSelector((state) => state.declaration)

    return isPopulated ? (
        <PDFViewer width="1000" height="600" >
            <Declaration {...data} />
        </PDFViewer>
    ) : <></>
}

export default DeclarationView