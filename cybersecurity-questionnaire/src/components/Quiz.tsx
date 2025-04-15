import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, LinearProgress, Dialog } from '@mui/material';
import { questions } from '../data/questions';
import { QuizState } from '../types';
import ReportPDF from './ReportPDF';
import { PDFViewer } from '@react-pdf/renderer';

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0
  });
  const [showPDF, setShowPDF] = useState(false);

  const handleAnswer = (optionScore: number) => {
    setQuizState(prev => ({
      ...prev,
      score: prev.score + optionScore,
      answers: [...prev.answers, optionScore],
      currentQuestion: prev.currentQuestion + 1
    }));
  };

  const getMaturityLevel = (score: number) => {
    if (score >= 30) return "Advanced (Level 5)";
    if (score >= 20) return "Good (Level 3-4)";
    if (score >= 10) return "Basic (Level 2)";
    return "Low (Level 0-1)";
  };

  const renderSummary = () => {
    const maturityLevel = getMaturityLevel(quizState.score);

    return (
      <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            CyberQuest Summary
          </Typography>
          <Typography variant="h6" gutterBottom>
            🛡️ Total Score: {quizState.score} / 35
          </Typography>
          <Typography variant="h6" gutterBottom>
            📊 Maturity Level: {maturityLevel}
          </Typography>
          <Typography variant="body1" gutterBottom>
            ⚠️ Recommendation: Review your gaps and prioritize quick wins for visibility and control.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 2 }}
            onClick={() => setShowPDF(true)}
          >
            📜 Export Report
          </Button>
        </CardContent>
      </Card>
    );
  };

  const progressPercentage = Math.round((quizState.currentQuestion / questions.length) * 100);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.paper', p: 3 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Box sx={{ mb: 2 }}>
          <LinearProgress variant="determinate" value={progressPercentage} sx={{ height: 8, borderRadius: 4 }} />
          <Typography variant="body2" sx={{ mt: 1 }}>
            Progress: {progressPercentage}%
          </Typography>
        </Box>
        {quizState.currentQuestion < questions.length ? (
          <Card sx={{ mt: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {questions[quizState.currentQuestion].text}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                {questions[quizState.currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    onClick={() => handleAnswer(option.score)}
                    sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
                  >
                    {option.text}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        ) : (
          renderSummary()
        )}
      </Box>

      <Dialog
        open={showPDF}
        onClose={() => setShowPDF(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ height: '80vh' }}>
          <PDFViewer style={{ width: '100%', height: '100%' }}>
            <ReportPDF
              answers={quizState.answers}
              score={quizState.score}
              maturityLevel={getMaturityLevel(quizState.score)}
            />
          </PDFViewer>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Quiz; 