import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import Quiz from './components/Quiz';
import cyboltLogo from './assets/cybolt-logo.png';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6b00',
      light: '#ff9843',
      dark: '#c53d00',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6b00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <img
            src={cyboltLogo}
            alt="Cybolt Logo"
            style={{
              height: '40px',
              marginRight: '16px',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cybersecurity Maturity Assessment
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Quiz />
      </Container>
    </ThemeProvider>
  );
}

export default App;
