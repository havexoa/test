import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import cyboltLogo from './assets/cybolt-logo.png';
import theme from './theme';

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
      <Router basename={process.env.PUBLIC_URL}>
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
              Cybersecurity Assessment Platform
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-assessment" element={<Questionnaire assessmentType="company" />} />
            <Route path="/employee-assessment" element={<Quiz assessmentType="security-plus" />} />
            <Route path="/cissp-assessment" element={<Quiz assessmentType="cissp" />} />
            <Route path="/quick-assessment" element={<Questionnaire assessmentType="quick" />} />
            <Route path="/detailed-assessment" element={<Questionnaire assessmentType="detailed" />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
