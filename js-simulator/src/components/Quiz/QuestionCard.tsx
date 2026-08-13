import type { Question } from "../../types/Question";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerId: number) => void;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) => {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {question.question}
      </h2>

      {question.description && (
        <div className="mb-6">
          <p className="text-gray-700 leading-7">
            {question.description}
          </p>
        </div>
      )}

      {question.code && (
        <div className="mb-8">
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 overflow-x-auto text-sm leading-6">
            <code>{question.code}</code>
          </pre>
        </div>
      )}

      <div className="space-y-4">

        {(question.options ?? []).map((option, index) => {

          const isSelected = selectedAnswer === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onAnswerSelect(option.id)}
              className={`
                w-full
                flex
                items-start
                gap-5
                p-5
                rounded-xl
                border-2
                transition-all
                duration-200

                ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                    : "bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                }
              `}
            >

              <div
                className={`
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  flex-shrink-0

                  ${
                    isSelected
                      ? "bg-white text-blue-600"
                      : "bg-gray-200 text-gray-700"
                  }
                `}
              >
                {letters[index]}
              </div>

              <pre className="text-left whitespace-pre-wrap font-sans text-base flex-1">
                {option.text}
              </pre>

            </button>
          );

        })}

      </div>

    </div>
  );
};

export default QuestionCard;