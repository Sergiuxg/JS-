import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function TrueFalseGroupQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.statements) {
    return null;
  }

  const answers = Array.isArray(value)
    ? value
    : new Array(question.statements.length).fill(null);

  const updateAnswer = (
    index: number,
    answer: boolean
  ) => {

    const newAnswers = [...answers];

    newAnswers[index] = answer;

    onChange(newAnswers);

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

      <div className="space-y-4">

        {question.statements.map((statement, index) => (

          <div
            key={statement.id}
            className="border rounded-lg p-4"
          >

            <p className="mb-3">
              {statement.text}
            </p>

            <div className="flex gap-6">

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  checked={answers[index] === true}
                  onChange={() =>
                    updateAnswer(index, true)
                  }
                />

                True

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  checked={answers[index] === false}
                  onChange={() =>
                    updateAnswer(index, false)
                  }
                />

                False

              </label>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}