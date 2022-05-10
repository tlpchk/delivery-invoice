import { Grid, styled, TextField, Typography } from "@mui/material"
import { english } from "../../data/dictionary"
import { ReceiverFormData } from "../../store/declaration/types"

interface ReceiverFormPartProps {
    formValues: ReceiverFormData
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2)
}));

const ReceiverFormPart = ({ formValues, handleChange }: ReceiverFormPartProps) => {
    return (<Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="left"
    >
        <Typography variant="h6">{english["receiver"]}</Typography>

        <StyledTextField
            name="receiver.name"
            label={english["name"]}
            type="text"
            value={formValues.name}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.streetAndBuilding"
            label={english["streetAndBuilding"]}
            type="text"
            value={formValues.streetAndBuilding}
            onChange={handleChange}
        />


        <StyledTextField
            name="receiver.postCode"
            label={english["postCode"]}
            type="text"
            value={formValues.postCode}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.city"
            label={english["city"]}
            type="text"
            value={formValues.city}
            onChange={handleChange}
        />

        <StyledTextField
            name="receiver.tel"
            label={english["tel"]}
            type="text"
            value={formValues.tel}
            onChange={handleChange}
        />
    </Grid>
    )
}

export default ReceiverFormPart