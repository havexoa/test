import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<div>Welcome to Cybersecurity Assessment</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
