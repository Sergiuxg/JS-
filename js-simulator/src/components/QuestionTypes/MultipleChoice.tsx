import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: number[];
  onChange: (value: number[]) => void;
}

const MultipleChoice = ({ question }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {question.question}
      </h2>

      <p className="text-gray-500">
        Multiple Choice (în dezvoltare)
      </p>
    </div>
  );
};

export default MultipleChoice;