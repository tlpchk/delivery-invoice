import { SenderFormData } from "../../store/declaration/types"
import FormPart, { FormPartProps } from "./FormPart"


const SenderFormPart = (props: FormPartProps<SenderFormData>) => (
    <FormPart formSectionName={"sender"} {...props}></FormPart>
)

export default SenderFormPart