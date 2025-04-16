import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

interface WelcomeProps {
  onStart: (name: string, company: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState({ name: false, company: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !name.trim(),
      company: !company.trim()
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.company) {
      onStart(name.trim(), company.trim());
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        p: 3
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          width: '100%',
          borderRadius: 2
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Welcome to Cybersecurity Assessment
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
          Please provide your information to begin the assessment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            helperText={errors.name ? "Please enter your name" : ""}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            error={errors.company}
            helperText={errors.company ? "Please enter your company name" : ""}
            sx={{ mb: 3 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Start Assessment
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Welcome; 