import _ from "lodash";
import { ContentFormData, DeclarationFormData } from "../../store/declaration/types"

export const maxNoContents = 6

export  const fulfillContentsWithEmptyLines = (contents: Array<ContentFormData>) => {
    contents = contents.filter(c => _.isEqual(c, defaultContentValues) === false)
    return _.concat(contents, Array(maxNoContents - contents.length).fill({ ...defaultContentValues, contentsDesc: " " }))
  }

export const defaultContentValues: ContentFormData = {
    contentsDesc: "",
    quantity: "",
    weight: "",
    value: "",
    hsTariffNumber: "",
    countryOfOrigin: ""
}

export const defaultFormValues: DeclarationFormData = {
    sender: {
      name: "Max Telepchuk",
      streetAndBuilding: "Somewhere in Poland, 3/3",
      postCode: "2342",
      city: "Wroclaw",
      tel: "123 213 321"
    },
    receiver: {
      name: "Даніл Березовський",
      streetAndBuilding: "Десь в Італії, 3/3",
      postCode: "4213",
      city: "Якесь місто",
      district: "Якась область",
      region: "Якийсь район",
      country: "Україна",
      tel: "912 231 123"
    },
    general: {
      declarationId: ""
    },
    contents: [{
      contentsDesc: "Опис 1",
      quantity: "1",
      weight: "3",
      value: "100",
      hsTariffNumber: "",
      countryOfOrigin: ""
    },
    {
      contentsDesc: "Опис 2",
      quantity: "2",
      weight: "2",
      value: "200",
      hsTariffNumber: "",
      countryOfOrigin: ""
    },
    {
      contentsDesc: "Опис 3",
      quantity: "3",
      weight: "1",
      value: "300",
      hsTariffNumber: "",
      countryOfOrigin: ""
    },
    ]
  };
  