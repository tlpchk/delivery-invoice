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

export interface ReceiverData extends ReceiverFormData{
    company: string
}

export interface DeclarationFormData {
    sender: SenderFormData
    receiver: ReceiverFormData
}

export interface DeclarationData extends DeclarationFormData {
    postalAdministration: string
    sender: SenderData
    receiver: ReceiverData
}


export interface DeclarationState {
    data: DeclarationData
    isPopulated: boolean
    // status: 'idle' | 'loading' | 'failed';
}
