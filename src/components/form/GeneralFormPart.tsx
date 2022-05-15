import { GeneralFormData } from "../../store/declaration/types"
import FormPart, { FormPartProps } from "./FormPart"


const GeneralFormPart = (props: FormPartProps<GeneralFormData>) => (
    <FormPart formSectionName={"general"} {...props}></FormPart>
)

export default GeneralFormPart