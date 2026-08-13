import type { Question } from "../../types/Question";

interface Props {
  question: Question;
  value: boolean[] | null;
  onChange: (value: boolean[]) => void;
}

const TrueFalseGroup = ({
  question,
  value,
  onChange,
}: Props) => {

  const answers = value ?? [];

  const handleChange = (
    index: number,
    answer: boolean
  ) => {

    const copy = [...answers];

    copy[index] = answer;

    onChange(copy);

  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        {question.question}
      </h2>

      <div className="space-y-6">

        {question.statements?.map((statement, index) => (

          <div
            key={statement.id}
            className="border rounded-xl p-5"
          >

            <p className="font-medium mb-5">
              {statement.text}
            </p>

            <div className="flex gap-8">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name={`statement-${statement.id}`}
                  checked={answers[index] === true}
                  onChange={() =>
                    handleChange(index, true)
                  }
                />

                <span>True</span>

              </label>

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name={`statement-${statement.id}`}
                  checked={answers[index] === false}
                  onChange={() =>
                    handleChange(index, false)
                  }
                />

                <span>False</span>

              </label>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TrueFalseGroup;