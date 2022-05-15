import { Grid, Typography } from "@mui/material"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { ReceiverFormData } from "../../store/declaration/types"
import StyledTextField from "./StyledTextField"

interface ReceiverFormPartProps {
    formValues: ReceiverFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ReceiverFormPart = ({ formValues, handleChange }: ReceiverFormPartProps) => {
    const { t } = useTranslation()
    const fieldNames = _.keys(formValues)

    return (<Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="left"
    >
        <Typography variant="h6">{t("receiver")}</Typography>

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

export default ReceiverFormPart