import { Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import LanguageSelect from "../language-select/LaguageSelect"

const DeclarationHeader = () => {
    const { t } = useTranslation()

    return (<Grid container justifyContent={"space-between"}>
        <Typography variant="h5">{t("declarationTitle")}</Typography>
        <LanguageSelect></LanguageSelect>
    </Grid>)
}

export default DeclarationHeader