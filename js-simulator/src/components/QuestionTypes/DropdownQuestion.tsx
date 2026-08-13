import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

const DropdownQuestion = ({ question }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {question.question}
      </h2>

      <p className="text-gray-500">
        Dropdown (în dezvoltare)
      </p>
    </div>
  );
};

export default DropdownQuestion;