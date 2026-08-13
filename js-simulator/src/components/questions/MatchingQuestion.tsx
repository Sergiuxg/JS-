import { useEffect, useState } from "react";
import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function MatchingQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.leftItems || !question.rightItems) {
    return null;
  }

  const [answers, setAnswers] = useState<Record<number, number>>(
    value ?? {}
  );

  useEffect(() => {
    onChange(answers);
  }, [answers, onChange]);

  const handleChange = (
    rightId: number,
    leftId: number
  ) => {

    setAnswers(prev => ({
      ...prev,
      [rightId]: leftId,
    }));

  };

  return (

    <div className="space-y-8">

      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-slate-900 text-green-300 rounded-lg p-4 overflow-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="grid md:grid-cols-2 gap-10">

        <div>

          <h3 className="font-semibold mb-3">
            Available options
          </h3>

          <div className="space-y-3">

            {question.leftItems.map(item => (

              <div
                key={item.id}
                className="border rounded-lg p-3 bg-slate-50"
              >
                {item.text}
              </div>

            ))}

          </div>

        </div>

        <div>

          <h3 className="font-semibold mb-3">
            Select the correct answer
          </h3>

          <div className="space-y-4">

            {question.rightItems.map(item => (

              <div
                key={item.id}
                className="space-y-2"
              >

                <div className="font-medium">
                  {item.text}
                </div>

                <select
                  className="w-full border rounded-lg p-3"
                  value={answers[item.id] ?? ""}
                  onChange={(e) =>
                    handleChange(
                      item.id,
                      Number(e.target.value)
                    )
                  }
                >

                  <option value="">
                    Select...
                  </option>

                  {question.leftItems!.map(option => (

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

      </div>

    </div>

  );

}