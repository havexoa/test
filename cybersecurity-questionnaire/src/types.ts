export interface QuestionOption {
  text: string;
  score: number;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  isQuickAssessment?: boolean;
  certification: string;
  isMultipleChoice: boolean;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
}

export interface UserInfo {
  name: string;
  company: string;
} 