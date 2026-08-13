import type { UserAnswer } from "../../types/UserAnswer";
import type { Question } from "../../types/Question";

interface QuestionNavigatorProps {
  questions: Question[];
  currentQuestion: number;
  userAnswers: UserAnswer[];
  onSelectQuestion: (index: number) => void;
}

const QuestionNavigator = ({
  questions,
  currentQuestion,
  userAnswers,
  onSelectQuestion,
}: QuestionNavigatorProps) => {
  const answeredQuestions = userAnswers.filter(
    (a) => a.answer !== null && a.answer !== undefined && a.answer !== ""
  ).length;

  const markedQuestions = userAnswers.filter(
    (a) => a.marked
  ).length;

  const unansweredQuestions =
    questions.length - answeredQuestions;

  const percentage = Math.round(
    (answeredQuestions / questions.length) * 100
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">

      <h2 className="text-xl font-bold text-center text-slate-800">
        Navigare
      </h2>

      <div className="mt-6">

        <div className="flex justify-between text-sm text-slate-600 mb-2">
          <span>Progres</span>
          <span>{percentage}%</span>
        </div>

        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-indigo-600 transition-all"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-6 space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Răspunse</span>
          <span className="font-bold text-green-600">
            {answeredQuestions}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Marcate</span>
          <span className="font-bold text-yellow-500">
            {markedQuestions}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Nerăspunse</span>
          <span className="font-bold text-red-500">
            {unansweredQuestions}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold">
            {questions.length}
          </span>
        </div>

      </div>

      <hr className="my-6" />

      <div className="grid grid-cols-5 gap-3">

        {questions.map((question, index) => {

          const answer = userAnswers.find(
            (a) => a.questionId === question.id
          );

          const answered =
            answer &&
            answer.answer !== null &&
            answer.answer !== undefined &&
            answer.answer !== "";

          const marked = answer?.marked;

          const isCurrent =
            currentQuestion === index;

          let className =
            "w-11 h-11 rounded-lg font-semibold transition-all duration-200";

          if (isCurrent) {

            className +=
              " ring-2 ring-indigo-600";

          }

          if (marked) {

            className +=
              " bg-yellow-400 text-black hover:bg-yellow-500";

          } else if (answered) {

            className +=
              " bg-green-500 text-white hover:bg-green-600";

          } else {

            className +=
              " bg-slate-200 hover:bg-slate-300";

          }

          return (
            <button
              key={question.id}
              className={className}
              onClick={() => onSelectQuestion(index)}
            >
              {index + 1}
            </button>
          );
        })}

      </div>

      <hr className="my-6" />

      <div className="space-y-2 text-sm">

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-indigo-600"></div>
          <span>Întrebarea curentă</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500"></div>
          <span>Răspunsă</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-400"></div>
          <span>Marcată</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-slate-300"></div>
          <span>Nerăspunsă</span>
        </div>

      </div>

    </div>
  );
};

export default QuestionNavigator;