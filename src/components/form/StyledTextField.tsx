import { styled, TextField } from "@mui/material"


const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(2)
}));

export default StyledTextField