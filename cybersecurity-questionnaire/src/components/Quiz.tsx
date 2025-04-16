import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Checkbox, FormControlLabel, FormGroup, Alert } from '@mui/material';
import { quizQuestions } from '../data/quizQuestions';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestionData = quizQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (currentQuestionData.isMultipleChoice) {
      setSelectedAnswers(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        }
        return [...prev, index];
      });
    } else {
      setSelectedAnswers([index]);
    }
  };

  const handleNext = () => {
    if (selectedAnswers.length === 0) {
      return;
    }

    const isCorrect = selectedAnswers.every(index => 
      currentQuestionData.options[index].isCorrect
    ) && selectedAnswers.length === currentQuestionData.options.filter(opt => opt.isCorrect).length;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswers([]);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <Box sx={{ p: 3 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Quiz Complete!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Your Score: {score} out of {quizQuestions.length}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Percentage: {((score / quizQuestions.length) * 100).toFixed(1)}%
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRestart}
              sx={{ mr: 2 }}
            >
              Try Again
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestion + 1} of {quizQuestions.length}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          {currentQuestionData.certification}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {currentQuestionData.text}
        </Typography>
        <FormGroup sx={{ mb: 3 }}>
          {currentQuestionData.options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                currentQuestionData.isMultipleChoice ? (
                  <Checkbox
                    checked={selectedAnswers.includes(index)}
                    onChange={() => handleAnswerSelect(index)}
                  />
                ) : (
                  <Checkbox
                    checked={selectedAnswers.includes(index)}
                    onChange={() => handleAnswerSelect(index)}
                    name={`option-${index}`}
                    type="radio"
                  />
                )
              }
              label={option.text}
            />
          ))}
        </FormGroup>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={selectedAnswers.length === 0}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Quiz; 