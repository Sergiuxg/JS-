export interface UserAnswer {
  questionId: number;
  answer: number | number[] | string | boolean[] | Record<number, number>;

  marked?: boolean;
}