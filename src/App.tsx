import { Grid } from '@mui/material';
import DeclarationView from './components/declaration/DeclarationView';
import { DeclarationForm } from './components/form/DeclarationForm';

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <DeclarationForm />
      </Grid>
      <Grid item>
        <DeclarationView />
      </Grid>
    </Grid>
  );
}

export default App;
