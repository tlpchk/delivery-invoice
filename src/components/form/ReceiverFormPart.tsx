import { Grid, styled, TextField, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { ReceiverFormData } from "../../store/declaration/types"

interface ReceiverFormPartProps {
    formValues: ReceiverFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2)
}));

const ReceiverFormPart = ({ formValues, handleChange }: ReceiverFormPartProps) => {
    const { t } = useTranslation()

    return (<Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="left"
    >
        <Typography variant="h6">{t("receiver")}</Typography>

        <StyledTextField
            name="receiver.name"
            label={t("name")}
            type="text"
            value={formValues.name}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.streetAndBuilding"
            label={t("streetAndBuilding")}
            type="text"
            value={formValues.streetAndBuilding}
            onChange={handleChange}
        />


        <StyledTextField
            name="receiver.postCode"
            label={t("postCode")}
            type="text"
            value={formValues.postCode}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.city"
            label={t("city")}
            type="text"
            value={formValues.city}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.region"
            label={t("region")}
            type="text"
            value={formValues.region}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.district"
            label={t("district")}
            type="text"
            value={formValues.district}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.country"
            label={t("country")}
            type="text"
            value={formValues.country}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.tel"
            label={t("tel")}
            type="text"
            value={formValues.tel}
            onChange={handleChange}
        />
    </Grid>
    )
}

export default ReceiverFormPart