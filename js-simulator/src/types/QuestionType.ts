const QuestionType = {
  Single: "single",
  Multiple: "multiple",
  Dropdown: "dropdown",
  Code: "code",
} as const;

export type QuestionType =
  (typeof QuestionType)[keyof typeof QuestionType];

export default QuestionType;