import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { DeclarationFormData, DeclarationState } from "./types";


const initialState: DeclarationState = {
    data: {
        postalAdministration: "ITALY",
        sender: {
            name: "",
            streetAndBuilding: "",
            postCode: "",
            city: "",
            tel: "",
            company: "Sender's company",
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
            company: "Receiver's company",
        },
        contents: [
            {
                contentsDesc: "Опис 1",
                quantity: "1",
                weight: "3",
                value: "100",
            },
            {
                contentsDesc: "Опис 2",
                quantity: "2",
                weight: "2",
                value: "200",
            },            {
                contentsDesc: "Опис 3",
                quantity: "3",
                weight: "1",
                value: "300",
            }
        ]
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
