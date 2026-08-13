import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export const useQuiz = () => {

  const context = useContext(QuizContext);

  if (!context) {
    throw new Error(
      "useQuiz trebuie folosit în interiorul QuizProvider."
    );
  }

  return context;
};