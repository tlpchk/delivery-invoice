import { ReceiverData } from "../../store/declaration/types"
import SectionRow from "./SectionRow"

const ReceiverSection = (data: ReceiverData) => {
    return <>
        <SectionRow name="name" value={data.name}></SectionRow>
        <SectionRow name="company" value={data.company}></SectionRow>
        <SectionRow name="streetAndBuilding" value={data.streetAndBuilding}></SectionRow>
        <SectionRow name="postCode" value={data.postCode}></SectionRow>
        <SectionRow name="city" value={data.city}></SectionRow>
        <SectionRow name="country" value={data.country}></SectionRow>
        <SectionRow name="tel" value={data.tel}></SectionRow>
    </>
}

export default ReceiverSection