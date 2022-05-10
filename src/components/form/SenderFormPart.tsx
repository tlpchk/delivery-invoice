import { Grid, styled, TextField, Typography } from "@mui/material"
import { english } from "../../data/dictionary"
import { SenderFormData } from "../../store/declaration/types"

interface SenderFromPartProps {
    formValues: SenderFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2)
}));

const SenderFormPart = ({ formValues, handleChange }: SenderFromPartProps) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
        >

            <Typography variant="h6">{english["sender"]}</Typography>

            <StyledTextField
                name="sender.name"
                label={english["name"]}
                type="text"
                value={formValues.name}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.streetAndBuilding"
                label={english["streetAndBuilding"]}
                type="text"
                value={formValues.streetAndBuilding}
                onChange={handleChange}
            />


            <StyledTextField
                name="sender.postCode"
                label={english["postCode"]}
                type="text"
                value={formValues.postCode}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.city"
                label={english["city"]}
                type="text"
                value={formValues.city}
                onChange={handleChange}
            />

            <StyledTextField
                name="sender.tel"
                label={english["tel"]}
                type="text"
                value={formValues.tel}
                onChange={handleChange}
            />
        </Grid>
    )
}

export default SenderFormPart