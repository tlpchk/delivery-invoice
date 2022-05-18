export interface SenderFormData {
    name: string
    streetAndBuilding: string
    postCode: string
    city: string
    tel: string
}

export interface ReceiverFormData {
    name: string
    streetAndBuilding: string
    postCode: string
    city: string
    region: string
    district: string
    country: string
    tel: string
}

export interface SenderData extends SenderFormData {
    company: string
    senderRef: string
    country: string
}

export interface ReceiverData extends ReceiverFormData {
    company: string
}

export interface ContentFormData {
    contentsDesc: string
    quantity: string
    weight: string
    value: string
    hsTariffNumber: string
    countryOfOrigin: string
}

export interface ContentData extends ContentFormData { }

export interface GeneralFormData {
    declarationId: string
}

export interface GeneralData extends GeneralFormData {
    agentCode: string
    importerReference: string
    importerContact: string
}

export interface DeclarationFormData {
    sender: SenderFormData
    receiver: ReceiverFormData
    general: GeneralFormData
    contents: Array<ContentFormData>
}

export interface DeclarationData extends DeclarationFormData {
    postalAdministration: string
    sender: SenderData
    receiver: ReceiverData
    general: GeneralData
    contents: Array<ContentData>
}


export interface DeclarationState {
    data: DeclarationData
    isPopulated: boolean
    // status: 'idle' | 'loading' | 'failed';
}
