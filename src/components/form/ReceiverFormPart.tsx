import { ReceiverFormData } from "../../store/declaration/types"
import FormPart, { FormPartProps } from "./FormPart"


const ReceiverFormPart = (props: FormPartProps<ReceiverFormData>) => (
    <FormPart formSectionName={"receiver"} {...props}></FormPart>
)

export default ReceiverFormPart