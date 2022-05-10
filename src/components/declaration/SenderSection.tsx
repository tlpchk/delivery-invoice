import { SenderData } from "../../store/declaration/types"
import SectionRow from "./SectionRow"

const SenderSection = (data: SenderData) => {
    return <>
        <SectionRow name="name" value={data.name}></SectionRow>
        <SectionRow name="company" value={data.company}></SectionRow>
        <SectionRow name="senderRef" value={data.senderRef}></SectionRow>
        <SectionRow name="streetAndBuilding" value={data.streetAndBuilding}></SectionRow>
        <SectionRow name="postCode" value={data.postCode}></SectionRow>
        <SectionRow name="city" value={data.city}></SectionRow>
        <SectionRow name="country" value={data.country}></SectionRow>
        <SectionRow name="tel" value={data.tel}></SectionRow>
    </>
}

export default SenderSection