import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface ResultsProps {
  score?: number;
  totalQuestions?: number;
}

const Results: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, totalQuestions = 0 } = (location.state as ResultsProps) || {};

  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom align="center">
          Assessment Results
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Your Score: {score} out of {totalQuestions}
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Percentage: {percentage.toFixed(1)}%
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Try Again
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Results; 