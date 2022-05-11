import { Grid } from '@mui/material';
import DeclarationWrapper from './components/declaration/DeclarationWrapper';
import { DeclarationForm } from './components/form/DeclarationForm';

function App() {
  return (
    <Grid
      container
      direction="column"
    >
      <Grid item>
        <DeclarationForm />
      </Grid>
      <Grid item>
        <DeclarationWrapper />
      </Grid>
    </Grid>
  );
}

export default App;
