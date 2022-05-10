import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { english } from "../../data/dictionary";
import { setData } from "../../store/declaration/declarationSlice";
import { DeclarationFormData } from "../../store/declaration/types";
import { useAppDispatch } from "../../store/hooks";
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
    name: "Danil Berezovski",
    streetAndBuilding: "Somewhere in Italy, 3/3",
    postCode: "4213",
    city: "Milan",
    tel: "912 231 123"
  }
};

export const DeclarationForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(_.set({ ...formValues }, name, value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setData(formValues))
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4">{english["declarationTitle"]}</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Grid item>
            <SenderFormPart
              formValues={formValues.sender}
              handleChange={handleInputChange} />
          </Grid>

          <Divider orientation="vertical" flexItem sx={{ ml: 4, mr: 4 }} />

          <Grid item>
            <ReceiverFormPart
              formValues={formValues.receiver}
              handleChange={handleInputChange} />
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Button variant={"contained"} type="submit">
            {english["submit"]}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};