import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { Category, DeclarationFormData, DeclarationState } from "./types";

const initialState: DeclarationState = {
    data: {
        postalAdministration: "ITALY",
        sender: {
            name: "",
            streetAndBuilding: "",
            postCode: "",
            city: "",
            tel: "",
            company: "",
            senderRef: "",
            country: "ITALY"
        },
        receiver: {
            name: "",
            streetAndBuilding: "",
            postCode: "",
            city: "",
            region: "",
            district: "",
            country: "ITALY",
            tel: "",
            company: "",
        },
        general: {
            declarationId: "",
            agentCode: " ",
            importerReference: " ",
            importerContact: " "
        },
        contents: [],
        category: Category.GIFT
    },
    isPopulated: false
    // status: 'idle',
};

export const declarationSlice = createSlice({
    name: 'declaration',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DeclarationFormData>) => {
            state.isPopulated = true
            state.data = _.merge(state.data, action.payload);
        },
    },
});

export const { setData } = declarationSlice.actions;

export default declarationSlice.reducer;
