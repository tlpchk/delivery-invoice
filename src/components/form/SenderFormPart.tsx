import { Grid, Typography } from "@mui/material"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { SenderFormData } from "../../store/declaration/types"
import StyledTextField from "./StyledTextField"

interface SenderFromPartProps {
    formValues: SenderFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SenderFormPart = ({ formValues, handleChange }: SenderFromPartProps) => {
    const { t } = useTranslation()
    const fieldNames = _.keys(formValues)

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
        >
            <Typography variant="h6">{t("sender")}</Typography>
            {fieldNames.map(name => (
            <StyledTextField
                key={name}
                name={`receiver.${name}`}
                label={t(name)}
                type="text"
                value={_.get(formValues, name)}
                onChange={handleChange}
            />
        ))}
        </Grid>
    )
}

export default SenderFormPart