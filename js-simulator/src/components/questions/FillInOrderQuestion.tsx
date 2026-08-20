import { useEffect, useState } from "react";

import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function FillInOrderQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.orderItems || !question.slots) {
    return null;
  }

  const [answers, setAnswers] = useState<number[]>(
    value ?? Array(question.slots).fill(0)
  );

  useEffect(() => {
    onChange(answers);
  }, [answers]);

  const changeAnswer = (
    index: number,
    optionId: number
  ) => {

    const updated = [...answers];

    updated[index] = optionId;

    setAnswers(updated);

  };

  return (

    <div className="space-y-6">

      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      {question.code && (

        <pre className="bg-slate-900 text-green-300 rounded-xl p-6 overflow-auto whitespace-pre-wrap">

          <code>{question.code}</code>

        </pre>

      )}

      <div className="space-y-4">

        {Array.from({
          length: question.slots,
        }).map((_, index) => (

          <div key={index}>

            <label className="block mb-2 font-semibold">

              Slot {index + 1}

            </label>

            <select
              value={answers[index]}
              onChange={(e) =>
                changeAnswer(
                  index,
                  Number(e.target.value)
                )
              }
              className="w-full rounded-lg border p-3"
            >

              <option value={0}>
                Select code...
              </option>

              {question.orderItems.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.text}
                </option>

              ))}

            </select>

          </div>

        ))}

      </div>

    </div>

  );

}