import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Does your company have a documented cybersecurity policy?',
    category: 'Policy'
  },
  {
    id: 2,
    text: 'Do you conduct regular security awareness training for employees?',
    category: 'Training'
  },
  {
    id: 3,
    text: 'Do you have an incident response plan in place?',
    category: 'Incident Response'
  },
  {
    id: 4,
    text: 'Do you perform regular security assessments and penetration testing?',
    category: 'Testing'
  },
  {
    id: 5,
    text: 'Do you have a data backup and recovery strategy?',
    category: 'Backup'
  }
];

const steps = ['Policy', 'Training', 'Incident Response', 'Testing', 'Backup'];

const CompanyAssessment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setShowResults(true);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const yesAnswers = Object.values(answers).filter(answer => answer === 'yes').length;
    return (yesAnswers / totalQuestions) * 100;
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return 'Your company has a strong cybersecurity posture. Continue maintaining and improving your security measures.';
    } else if (score >= 50) {
      return 'Your company has a moderate cybersecurity posture. Consider implementing additional security measures.';
    } else {
      return 'Your company has a weak cybersecurity posture. Immediate action is recommended to improve security measures.';
    }
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations(score);

    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Assessment Results
          </Typography>
          <Typography variant="h6" gutterBottom>
            Score: {score.toFixed(1)}%
          </Typography>
          <Alert severity={score >= 80 ? 'success' : score >= 50 ? 'warning' : 'error'} sx={{ mb: 3 }}>
            {recommendations}
          </Alert>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Return to Home
          </Button>
        </Paper>
      </Container>
    );
  }

  const currentQuestions = questions.filter(q => q.category === steps[activeStep]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {steps[activeStep]} Assessment
        </Typography>

        {currentQuestions.map((question) => (
          <FormControl key={question.id} component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">{question.text}</FormLabel>
            <RadioGroup
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!currentQuestions.every(q => answers[q.id])}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CompanyAssessment; 