import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

interface WelcomeProps {
  onStart: (name: string, company: string) => void;
  assessmentType: 'company' | 'quick' | 'detailed';
}

const Welcome: React.FC<WelcomeProps> = ({ onStart, assessmentType }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && company) {
      onStart(name, company);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to the {assessmentType === 'quick' ? 'Quick' : assessmentType === 'detailed' ? 'Detailed' : 'Company'} Cybersecurity Assessment
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
          Please enter your information to begin the assessment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            margin="normal"
            required
          />
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!name || !company}
            >
              Start Assessment
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Welcome; 