import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function SingleQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.options) return null;

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="space-y-3">

        {question.options.map((option) => (

          <label
            key={option.id}
            className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition
              ${
                value === option.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
          >

            <input
              type="radio"
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />

            <span>{option.text}</span>

          </label>

        ))}

      </div>

    </div>
  );
}