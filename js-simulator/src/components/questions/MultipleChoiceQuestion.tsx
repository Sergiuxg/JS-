import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function MultipleChoiceQuestion({
  question,
  value,
  onChange,
}: Props) {
  if (!question.options) return null;

  // Dacă există correctOptionIds => checkbox
  const isMultiple = "correctOptionIds" in question;

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-gray-900 text-green-300 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="space-y-3">

        {question.options.map((option) => {

          const checked = isMultiple
            ? Array.isArray(value) && value.includes(option.id)
            : value === option.id;

          return (
            <label
              key={option.id}
              className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition
                ${
                  checked
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
            >

              <input
                type={isMultiple ? "checkbox" : "radio"}
                checked={checked}
                onChange={() => {

                  if (isMultiple) {

                    let newValue = Array.isArray(value)
                      ? [...value]
                      : [];

                    if (newValue.includes(option.id)) {
                      newValue = newValue.filter(
                        (id) => id !== option.id
                      );
                    } else {
                      newValue.push(option.id);
                    }

                    onChange(newValue);

                  } else {

                    onChange(option.id);

                  }

                }}
              />

              <span className="whitespace-pre-wrap">
                {option.text}
              </span>

            </label>
          );

        })}

      </div>

    </div>
  );
}