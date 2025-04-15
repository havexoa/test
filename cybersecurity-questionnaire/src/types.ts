export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
} 