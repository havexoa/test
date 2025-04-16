import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

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
      <Router>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cybersecurity Assessment Platform
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Welcome to Cybersecurity Assessment</h1>
                <p>Select an assessment type to begin:</p>
                <ul>
                  <li><a href="/company-assessment">Company Assessment</a></li>
                  <li><a href="/employee-assessment">Employee Assessment</a></li>
                  <li><a href="/cissp-assessment">CISSP Assessment</a></li>
                  <li><a href="/quick-assessment">Quick Assessment</a></li>
                  <li><a href="/detailed-assessment">Detailed Assessment</a></li>
                </ul>
              </div>
            } />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
