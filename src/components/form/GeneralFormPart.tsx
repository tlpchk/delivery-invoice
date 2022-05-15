import { Grid, Typography } from "@mui/material"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { GeneralFormData } from "../../store/declaration/types"
import StyledTextField from "./StyledTextField"

interface GeneralFormPartProps {
    formValues: GeneralFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const GeneralFormPart = ({ formValues, handleChange }: GeneralFormPartProps) => {
    const { t } = useTranslation()
    const fieldNames = _.keys(formValues)

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
        >
            <Typography variant="h6">{t("general")}</Typography>
            {fieldNames.map(name => (
            <StyledTextField
                key={name}
                name={`general.${name}`}
                label={t(name)}
                type="text"
                value={_.get(formValues, name)}
                onChange={handleChange}
            />
        ))}
        </Grid>
    )
}

export default GeneralFormPart