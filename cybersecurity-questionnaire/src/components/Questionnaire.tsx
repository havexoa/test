import React, { useState } from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Paper, Alert } from '@mui/material';
import { questions } from '../data/questions';
import ReportPDF from './ReportPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Welcome from './Welcome';
import { useNavigate } from 'react-router-dom';

interface UserInfo {
  name: string;
  company: string;
}

const Questionnaire: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showReport, setShowReport] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = (name: string, company: string) => {
    setUserInfo({ name, company });
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    setError(null);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === -1) {
      setError('Please select an answer before proceeding');
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowReport(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(-1));
    setShowReport(false);
    setUserInfo(null);
    setError(null);
  };

  if (!userInfo) {
    return <Welcome onStart={handleStart} />;
  }

  if (showReport) {
    const score = answers.reduce((sum, answer) => sum + (answer + 1), 0);
    const maxScore = questions.length * 5;
    const percentage = (score / maxScore) * 100;
    let maturityLevel = '';

    if (percentage >= 80) {
      maturityLevel = 'Advanced';
    } else if (percentage >= 60) {
      maturityLevel = 'Intermediate';
    } else if (percentage >= 40) {
      maturityLevel = 'Basic';
    } else {
      maturityLevel = 'Initial';
    }

    return (
      <Box sx={{ p: 3 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Assessment Complete!
          </Typography>
          <Typography variant="h6" gutterBottom>
            {userInfo.name} from {userInfo.company}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your score: {score} out of {maxScore} ({percentage.toFixed(1)}%)
          </Typography>
          <Typography variant="body1" gutterBottom>
            Maturity Level: {maturityLevel}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <PDFDownloadLink
              document={
                <ReportPDF
                  answers={answers}
                  questions={questions}
                  userInfo={userInfo}
                  score={score}
                  maturityLevel={maturityLevel}
                />
              }
              fileName="cybersecurity-assessment.pdf"
            >
              {({ loading }) => (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  sx={{ mr: 2 }}
                >
                  {loading ? 'Preparing PDF...' : 'Download PDF Report'}
                </Button>
              )}
            </PDFDownloadLink>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleRestart}
            >
              Start New Assessment
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
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {questions[currentQuestion].text}
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
          <RadioGroup
            value={answers[currentQuestion]}
            onChange={(e) => handleAnswer(Number(e.target.value))}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio />}
                label={option.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Questionnaire; 