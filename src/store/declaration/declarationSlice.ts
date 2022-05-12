import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { DeclarationFormData, DeclarationState } from "./types";


const initialState: DeclarationState = {
    data: {
        sender: {
            name: "",
            streetAndBuilding: "",
            postCode: "",
            city: "",
            tel: "",
            company: "Sender's company",
            senderRef: "9999999999",
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
            company: "Receiver's company",
        },
        postalAdministration: "ITALY"
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
