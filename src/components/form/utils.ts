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
      name: "",
      streetAndBuilding: "",
      postCode: "",
      city: "",
      tel: ""
    },
    receiver: {
      name: "",
      streetAndBuilding: "",
      postCode: "",
      city: "",
      district: "",
      region: "",
      country: "",
      tel: ""
    },
    general: {
      declarationId: ""
    },
    contents: [{
      contentsDesc: "",
      quantity: "",
      weight: "",
      value: "",
      hsTariffNumber: "",
      countryOfOrigin: ""
    }]
  };
  