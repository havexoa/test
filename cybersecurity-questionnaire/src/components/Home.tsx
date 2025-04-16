import React from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
          maxWidth: 800,
          width: '100%',
          borderRadius: 2
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Cybersecurity Assessment Platform
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
          Choose an assessment type to begin
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 0, 0.05)'
                }
              }}
              onClick={() => navigate('/questionnaire')}
            >
              <Typography variant="h5" gutterBottom>
                Maturity Assessment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Evaluate your organization's cybersecurity maturity level
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Start Assessment
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 0, 0.05)'
                }
              }}
              onClick={() => navigate('/quiz')}
            >
              <Typography variant="h5" gutterBottom>
                Certification Quiz
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Practice questions for Security+ and CISSP certifications
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Start Quiz
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home; 