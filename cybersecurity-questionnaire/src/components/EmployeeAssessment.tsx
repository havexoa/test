import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Alert,
  LinearProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { securityPlusQuestions } from '../data/certificationQuestions';
import { Question, QuestionOption } from '../types';

const EmployeeAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = securityPlusQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / securityPlusQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex === securityPlusQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestionIndex(prev => prev - 1);
  };

  const calculateScore = () => {
    const totalQuestions = securityPlusQuestions.length;
    const correctAnswers = Object.entries(answers).filter(([questionId, answer]) => {
      const question = securityPlusQuestions.find((q: Question) => q.id === parseInt(questionId));
      return question?.options.find((opt: QuestionOption) => opt.text === answer)?.isCorrect;
    }).length;
    return (correctAnswers / totalQuestions) * 100;
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return 'Excellent! You have a strong understanding of Security+ concepts.';
    } else if (score >= 60) {
      return 'Good job! You have a solid foundation in Security+ concepts.';
    } else {
      return 'Consider reviewing Security+ materials to strengthen your knowledge.';
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
          <Alert severity={score >= 80 ? 'success' : score >= 60 ? 'warning' : 'error'} sx={{ mb: 3 }}>
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

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Question {currentQuestionIndex + 1} of {securityPlusQuestions.length}
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          {currentQuestion.text}
        </Typography>

        <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
          <RadioGroup
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
          >
            {currentQuestion.options.map((option: QuestionOption) => (
              <FormControlLabel
                key={option.text}
                value={option.text}
                control={<Radio />}
                label={option.text}
                sx={{ mb: 1 }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
          >
            {currentQuestionIndex === securityPlusQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeAssessment; 