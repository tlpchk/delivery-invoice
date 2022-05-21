import { Button, Grid, TextField, Typography } from "@mui/material"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ContentFormData } from "../../store/declaration/types"
import { defaultContentValues, maxNoContents } from "./utils";

interface ContentsFormPartProps {
    formValues: Array<ContentFormData>
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onAdd: () => void
    onRemove: (idx: number) => void
}

const ContentsFormPart = ({ formValues, handleChange, onAdd, onRemove }: ContentsFormPartProps) => {
    const { t } = useTranslation()
    const fieldNames = _.keys(defaultContentValues)

    return <Grid container
        direction="column"
        justifyContent="center"
        alignItems="left"
        rowGap={2}
        sx={{ p: 2 }}
    >
        <Grid item xs>
            <Grid container columnGap={2}>
                <Typography variant="h6">{t("contents")}</Typography>

                <Button
                    variant="outlined"
                    onClick={onAdd}
                    disabled={formValues.length >= maxNoContents}
                    startIcon={<AddIcon />}>
                    {t("addContent")}
                </Button>
            </Grid>
        </Grid>

        {formValues.map((content, contentIdx) => (
            <Grid item xs key={contentIdx}>
                <Grid container
                    direction="row"
                    columnGap={2}
                    rowGap={2}
                >
                    <Typography variant="subtitle1" pt={1}>#{contentIdx + 1}</Typography>

                    <Grid item xs>
                        <Grid container
                            direction={{ xs: "column", sm: "row" }}
                            columnGap={2}
                            rowGap={2}
                        >
                            {fieldNames.map((fieldName, fieldIdx) => (
                                <TextField
                                    key={fieldIdx}
                                    name={`contents[${contentIdx}].${fieldName}`}
                                    label={t(fieldName)}
                                    type="text"
                                    value={_.get(content, fieldName)}
                                    onChange={handleChange}
                                />
                            ))}
                            <Button
                                onClick={() => onRemove(contentIdx)}
                                startIcon={<DeleteIcon />}
                                color={"error"}
                                variant={"outlined"}
                                disabled={formValues.length === 1}
                                sx={{ alignSelf: "center" }}
                            >{t("removeContent")} #{contentIdx + 1}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>))
        }
    </Grid >
}


export default ContentsFormPart