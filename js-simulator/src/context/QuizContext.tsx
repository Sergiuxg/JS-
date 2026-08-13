import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import { questions } from "../data/questions";
import { generateExam } from "../utils/generateExam";

import type { Question } from "../types/Question";
import type { QuizContextType } from "../types/QuizContextType";
import type { UserAnswer } from "../types/UserAnswer";

export const QuizContext =
  createContext<QuizContextType | null>(null);

interface QuizProviderProps {
  children: ReactNode;
}

const QUIZ_KEY = "js-quiz";
const ANSWERS_KEY = "js-answers";
const CURRENT_QUESTION_KEY = "js-current-question";

export const QuizProvider = ({
  children,
}: QuizProviderProps) => {

  const quiz = useMemo<Question[]>(() => {

    const savedQuiz =
      localStorage.getItem(QUIZ_KEY);

    if (savedQuiz) {
      return JSON.parse(savedQuiz);
    }

    const generatedQuiz =
      generateExam(questions, 40);

    localStorage.setItem(
      QUIZ_KEY,
      JSON.stringify(generatedQuiz)
    );

    return generatedQuiz;

  }, []);

  const [currentQuestion, setCurrentQuestion] =
    useState(() => {

      const saved =
        localStorage.getItem(
          CURRENT_QUESTION_KEY
        );

      return saved ? Number(saved) : 0;

    });

  const [userAnswers, setUserAnswers] =
    useState<UserAnswer[]>(() => {

      const saved =
        localStorage.getItem(
          ANSWERS_KEY
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [];

    });

  useEffect(() => {

    localStorage.setItem(
      ANSWERS_KEY,
      JSON.stringify(userAnswers)
    );

  }, [userAnswers]);

  useEffect(() => {

    localStorage.setItem(
      CURRENT_QUESTION_KEY,
      String(currentQuestion)
    );

  }, [currentQuestion]);

  return (

    <QuizContext.Provider
      value={{
        quiz,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setUserAnswers,
      }}
    >

      {children}

    </QuizContext.Provider>

  );

};