import { Box, Button, Grid } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { setData } from "../../store/declaration/declarationSlice";
import { DeclarationFormData } from "../../store/declaration/types";
import { useAppDispatch } from "../../store/hooks";
import DeclarationHeader from "./DeclarationHeader";
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
  }
};

export const DeclarationForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useAppDispatch()
  const {t} = useTranslation()

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
      <DeclarationHeader></DeclarationHeader>
      <form onSubmit={handleSubmit}>
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="start"
          sx={{ pt: 2 }}
          columns={{ xs: 1, sm: 2 }}
        >
          <Grid item xs={1} sm={1}>
            <SenderFormPart
              formValues={formValues.sender}
              handleChange={handleInputChange} />
          </Grid>

          <Grid item xs={1} sm={1}>
            <ReceiverFormPart
              formValues={formValues.receiver}
              handleChange={handleInputChange} />
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Button variant={"contained"} type="submit">
            {t("submit")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};