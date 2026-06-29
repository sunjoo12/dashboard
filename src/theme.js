import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A8D8EE',
      light: '#C8ECF8',
      dark: '#6BBFD6',
      contrastText: '#1D3557',
    },
    secondary: {
      main: '#FF5C8F',
      dark: '#E0437A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#A8D8EE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D3557',
      secondary: '#2C4A7C',
      disabled: '#5A7A9A',
    },
    info: {
      main: '#3DB8B2',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
