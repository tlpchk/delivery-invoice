import { Box, Button, Grid } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import {  setData } from "../../store/declaration/declarationSlice";
import { useAppDispatch } from "../../store/hooks";
import ContentsFormPart from "./ContentsList";
import DeclarationHeader from "./DeclarationHeader";
import GeneralFormPart from "./GeneralFormPart";
import ReceiverFormPart from "./ReceiverFormPart";
import SenderFormPart from "./SenderFormPart";
import { defaultContentValues, defaultFormValues, fulfillContentsWithEmptyLines } from "./utils";

export const DeclarationForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(_.set({ ...formValues }, name, value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setData({
      ...formValues,
      contents: fulfillContentsWithEmptyLines(formValues.contents)
    }));
  };

  const onContentAdd = () => {
    const newContents = [...formValues.contents, { ...defaultContentValues }]
    setFormValues(_.set({ ...formValues }, "contents", newContents));
  }

  const onContentRemove = (idx: number) => {
    const newContents = formValues.contents.filter((_, cIdx) => cIdx !== idx)
    setFormValues(_.set({ ...formValues }, "contents", newContents));
  }

  return (
    <Box sx={{ p: 2 }}>
      <DeclarationHeader />
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" justifyContent="space-between" style={{ height: "100%" }}>
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

          <Grid item xs>
            <ContentsFormPart
              formValues={formValues.contents}
              handleChange={handleInputChange}
              onAdd={onContentAdd}
              onRemove={onContentRemove}
            ></ContentsFormPart>
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