import type { Question } from "./Question";
import type { UserAnswer } from "./UserAnswer";

export interface QuizContextType {
  quiz: Question[];

  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;

  userAnswers: UserAnswer[];
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>;

}