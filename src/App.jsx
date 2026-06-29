import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;
