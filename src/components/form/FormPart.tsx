import { Grid, TextField, Typography } from "@mui/material"
import _ from "lodash"
import { useTranslation } from "react-i18next"

export interface NamedFormPart {
    formSectionName: string
}

export interface FormPartProps<T>  {
    formValues: T
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const FormPart = <T extends unknown>({ formSectionName, formValues, handleChange }: NamedFormPart & FormPartProps<T>) => {
    const { t } = useTranslation()
    const fieldNames = _.keys(formValues)

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
            rowGap={2}
            sx={{px: 2}}
        >
            <Typography variant="h6">{t(`${formSectionName}`)}</Typography>

            {fieldNames.map(fieldName => (
            <TextField
                key={fieldName}
                name={`${formSectionName}.${fieldName}`}
                label={t(fieldName)}
                type="text"
                value={_.get(formValues, fieldName)}
                onChange={handleChange}
            />
        ))}
        </Grid>
    )
}


export default FormPart