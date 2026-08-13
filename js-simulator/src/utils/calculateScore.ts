import type { Question } from "../types/Question";
import type { UserAnswer } from "../types/UserAnswer";

export const calculateScore = (
  quiz: Question[],
  userAnswers: UserAnswer[]
) => {

  let score = 0;

  quiz.forEach((question) => {

    const userAnswer = userAnswers.find(
      (item) => item.questionId === question.id
    );

    if (!userAnswer) return;

    switch (question.type) {

      case "single": {

        if (
          userAnswer.answer === question.correctOptionId
        ) {
          score++;
        }

        break;
      }

      case "multiple_choice": {

        if (question.correctOptionIds) {

          const user = (userAnswer.answer as number[]).sort();

          const correct = [...question.correctOptionIds].sort();

          if (
            JSON.stringify(user) ===
            JSON.stringify(correct)
          ) {
            score++;
          }

        } else {

          if (
            userAnswer.answer ===
            question.correctOptionId
          ) {
            score++;
          }

        }

        break;
      }

      case "dropdown": {

        const user = userAnswer.answer as Record<number, number>;

        let ok = true;

        question.dropdowns?.forEach((dropdown) => {

          if (
            user[dropdown.id] !== dropdown.correctOptionId
          ) {
            ok = false;
          }

        });

        if (ok) score++;

        break;
      }

      case "trueFalseGroup": {

        const user = userAnswer.answer as boolean[];

        const correct =
          question.statements?.map(
            (statement) => statement.correct
          ) ?? [];

        if (
          JSON.stringify(user) ===
          JSON.stringify(correct)
        ) {
          score++;
        }

        break;
      }

      case "drag_drop": {

        const user = userAnswer.answer as Record<number, number>;

        let ok = true;

        question.dropZones?.forEach((zone) => {

          if (
            user[zone.id] !== zone.correctItemId
          ) {
            ok = false;
          }

        });

        if (ok) score++;

        break;
      }

      case "matching": {

        const user =
          userAnswer.answer as Record<number, number>;

        if (
          JSON.stringify(user) ===
          JSON.stringify(question.correctMatches)
        ) {
          score++;
        }

        break;
      }

      case "fill_in_order": {

        const user =
          userAnswer.answer as number[];

        if (
          JSON.stringify(user) ===
          JSON.stringify(question.correctOrder)
        ) {
          score++;
        }

        break;
      }

      default:
        break;

    }

  });

  return score;

};