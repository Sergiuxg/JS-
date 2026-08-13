import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function DropdownQuestion({
  question,
  value,
  onChange,
}: Props) {
  if (!question.dropdowns) return null;

  const answers: Record<number, number> = value ?? {};

  const updateAnswer = (
    dropdownId: number,
    optionId: number
  ) => {
    onChange({
      ...answers,
      [dropdownId]: optionId,
    });
  };

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

      <div className="space-y-5">

        {question.dropdowns.map((dropdown) => (

          <div key={dropdown.id}>

            {dropdown.label && (
              <label className="block mb-2 font-medium">
                {dropdown.label}
              </label>
            )}

            <select
              className="w-full border rounded-lg p-2"
              value={answers[dropdown.id] ?? ""}
              onChange={(e) =>
                updateAnswer(
                  dropdown.id,
                  Number(e.target.value)
                )
              }
            >

              <option value="">
                Select an answer
              </option>

              {dropdown.options.map((option) => (

                <option
                  key={option.id}
                  value={option.id}
                >
                  {option.text}
                </option>

              ))}

            </select>

          </div>

        ))}

      </div>

    </div>
  );
}