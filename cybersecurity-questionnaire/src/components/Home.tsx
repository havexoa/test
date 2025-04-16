import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Box sx={{ 
        maxWidth: 1200,
        width: '100%',
        textAlign: 'center',
        mb: 4
      }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: '#1a237e',
          mb: 2
        }}>
          Cybersecurity Assessment Platform
        </Typography>
        
        <Typography variant="h5" sx={{ 
          color: '#455a64',
          mb: 4
        }}>
          Choose the type of assessment you want to perform
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1a237e' }}>
              Company Assessment
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
              Evaluate your organization's cybersecurity maturity level and get actionable recommendations for improvement.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/company-assessment')}
              sx={{
                bgcolor: '#1a237e',
                '&:hover': {
                  bgcolor: '#0d47a1'
                }
              }}
            >
              Start Company Assessment
            </Button>
          </Paper>
          
          <Paper
            elevation={2}
            sx={{
              p: 3,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1a237e' }}>
              Employee Assessment
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
              Test your cybersecurity knowledge with certification-style questions from CompTIA Security+ and CISSP.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/employee-assessment')}
              sx={{
                bgcolor: '#1a237e',
                '&:hover': {
                  bgcolor: '#0d47a1'
                }
              }}
            >
              Start Employee Assessment
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 