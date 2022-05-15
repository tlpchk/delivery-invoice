import { Box, Button, Grid } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { setData } from "../../store/declaration/declarationSlice";
import { DeclarationFormData } from "../../store/declaration/types";
import { useAppDispatch } from "../../store/hooks";
import DeclarationHeader from "./DeclarationHeader";
import GeneralFormPart from "./GeneralFormPart";
import ReceiverFormPart from "./ReceiverFormPart";
import SenderFormPart from "./SenderFormPart";

const defaultValues: DeclarationFormData = {
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
  }
};

export const DeclarationForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(_.set({ ...formValues }, name, value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setData(formValues));
  };

  return (
    <Box sx={{ p: 2 }}>
      <DeclarationHeader />
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column"  justifyContent="space-between" style={{ height: "100%" }}>
              <Grid item>
                <GeneralFormPart
                  formValues={formValues.general}
                  handleChange={handleInputChange} />
              </Grid>

              <Grid item>
                <SenderFormPart
                  formValues={formValues.sender}
                  handleChange={handleInputChange} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ReceiverFormPart
              formValues={formValues.receiver}
              handleChange={handleInputChange} />
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Button variant={"contained"} type="submit">
            {t("submit")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};