
export type Dictionary = {
    [key: string]: string,
}

export const english: Dictionary = {
    "declarationTitle": "Declaration Form",
    "submit": "Submit",
    "sender": "Sender",
    "receiver": "Receiver",
    "from" : "From",
    "to" : "To",
    "loadingInvoice": "Loading...",
    "download": "Download",

    "name": "Last name, First name",
    "postalAdministration": "Postal administration",
    "company": "Company (firm)",
    "streetAndBuilding" : "Street, build., apt.",
    "postCode": "Postcode",
    "country": "Country",
    "city": "City",
    "tel" : "Tel.",
    "senderRef": "Sender's customs reference (if any)",
}

export const ukrainian: Dictionary = {
    "name": "Прізвище, ім’я",
    "postalAdministration": "Поштова адміністрація",
    "company": "Компанія/Фірма",
    "streetAndBuilding" : "Вулиця, буд., кв.",
    "postCode": "Поштовий індекс",
    "country": "Країна",
    "tel" : "Тел.",
    "city": "Місто",
    "senderRef": "Митне посилання відправлення"
}


export const languages = {
    "EN": english,
    "UA": ukrainian
}
