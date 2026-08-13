import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: number | null;
  onChange: (value: number) => void;
}

const CodeQuestion = ({ question }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {question.question}
      </h2>

      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto">
        {question.code}
      </pre>

      <p className="text-gray-500 mt-4">
        Code Question (în dezvoltare)
      </p>
    </div>
  );
};

export default CodeQuestion;