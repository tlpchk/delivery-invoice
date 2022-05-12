import { Grid, styled, TextField, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { SenderFormData } from "../../store/declaration/types"

interface SenderFromPartProps {
    formValues: SenderFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2)
}));

const SenderFormPart = ({ formValues, handleChange }: SenderFromPartProps) => {
    const { t } = useTranslation()

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
        >

            <Typography variant="h6">{t("sender")}</Typography>

            <StyledTextField
                name="sender.name"
                label={t("name")}
                type="text"
                value={formValues.name}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.streetAndBuilding"
                label={t("streetAndBuilding")}
                type="text"
                value={formValues.streetAndBuilding}
                onChange={handleChange}
            />


            <StyledTextField
                name="sender.postCode"
                label={t("postCode")}
                type="text"
                value={formValues.postCode}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.city"
                label={t("city")}
                type="text"
                value={formValues.city}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.tel"
                label={t("tel")}
                type="text"
                value={formValues.tel}
                onChange={handleChange}
            />
        </Grid>
    )
}

export default SenderFormPart