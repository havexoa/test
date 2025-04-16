import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormGroup, Checkbox, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Question } from '../types';
import { securityPlusQuestions, cisspQuestions } from '../data/certificationQuestions';

interface QuizProps {
  assessmentType: 'security-plus' | 'cissp';
}

const Quiz: React.FC<QuizProps> = ({ assessmentType }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showCISSPDialog, setShowCISSPDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (assessmentType === 'security-plus') {
      setQuestions(securityPlusQuestions);
    } else {
      setQuestions(cisspQuestions);
    }
    setIsLoading(false);
  }, [assessmentType]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (!currentQuestion) return;
    
    if (currentQuestion.isMultipleChoice) {
      setSelectedAnswers(prev => 
        prev.includes(answer) 
          ? prev.filter(a => a !== answer)
          : [...prev, answer]
      );
    } else {
      setSelectedAnswers([answer]);
    }
  };

  const handleNext = () => {
    if (!currentQuestion) return;

    const isCorrect = currentQuestion.options
      .filter((option: { isCorrect: boolean }) => option.isCorrect)
      .map((option: { text: string }) => option.text)
      .every(answer => selectedAnswers.includes(answer));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Check if we should show CISSP dialog after 10 questions
    if (assessmentType === 'security-plus' && currentQuestionIndex === 9) {
      const currentScore = isCorrect ? score + 1 : score;
      const percentage = (currentScore / 10) * 100;
      if (percentage >= 80) {
        setShowCISSPDialog(true);
        return;
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
    } else {
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  };

  const handleCISSPContinue = () => {
    setQuestions(prev => [...prev, ...cisspQuestions]);
    setShowCISSPDialog(false);
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswers([]);
  };

  const handleCISSPSkip = () => {
    navigate('/results', { state: { score, totalQuestions: questions.length } });
  };

  if (isLoading || !currentQuestion) {
    return (
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            {assessmentType === 'security-plus' ? 'Security+ Assessment' : 'CISSP Assessment'}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </Box>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" paragraph>
          {currentQuestion.text}
        </Typography>
        <FormControl component="fieldset">
          {currentQuestion.isMultipleChoice ? (
            <FormGroup>
              {currentQuestion.options.map((option: { text: string }) => (
                <FormControlLabel
                  key={option.text}
                  control={
                    <Checkbox
                      checked={selectedAnswers.includes(option.text)}
                      onChange={() => handleAnswerSelect(option.text)}
                    />
                  }
                  label={option.text}
                />
              ))}
            </FormGroup>
          ) : (
            <RadioGroup>
              {currentQuestion.options.map((option: { text: string }) => (
                <FormControlLabel
                  key={option.text}
                  value={option.text}
                  control={
                    <Radio
                      checked={selectedAnswers.includes(option.text)}
                      onChange={() => handleAnswerSelect(option.text)}
                    />
                  }
                  label={option.text}
                />
              ))}
            </RadioGroup>
          )}
        </FormControl>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={selectedAnswers.length === 0}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish'}
          </Button>
        </Box>
      </Box>

      <Dialog open={showCISSPDialog} onClose={handleCISSPSkip}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <Typography>
            You've scored {((score / 10) * 100).toFixed(0)}% on the Security+ questions!
            Would you like to continue with CISSP certification questions?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCISSPSkip}>Skip CISSP Questions</Button>
          <Button onClick={handleCISSPContinue} variant="contained" color="primary">
            Continue with CISSP Questions
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Quiz; 