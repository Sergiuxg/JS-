import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQuiz } from "../hooks/useQuiz";
import { calculateScore } from "../utils/calculateScore";

import QuizLayout from "../components/Layout/QuizLayout";
import ProgressBar from "../components/Quiz/ProgressBar";
import NavigationButtons from "../components/Quiz/NavigationButtons";
import QuestionNavigator from "../components/Quiz/QuestionNavigator";
import QuestionRenderer from "../components/QuestionTypes/QuestionRenderer";
import Timer from "../components/Quiz/Timer";

const Quiz = () => {
  const navigate = useNavigate();

  const {
    quiz,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setUserAnswers,
  } = useQuiz();

  const [error, setError] = useState("");
  const [showFinishModal, setShowFinishModal] = useState(false);

  const currentQuestionId = quiz[currentQuestion].id;

  const currentUserAnswer = userAnswers.find(
    (item) => item.questionId === currentQuestionId
  );

  const currentAnswer = currentUserAnswer?.answer ?? null;

  const isMarked = currentUserAnswer?.marked ?? false;

  const handleAnswer = (answer: any) => {
    const updatedAnswers = [...userAnswers];

    const index = updatedAnswers.findIndex(
      (item) => item.questionId === currentQuestionId
    );

    if (index >= 0) {
      updatedAnswers[index] = {
        ...updatedAnswers[index],
        answer,
      };
    } else {
      updatedAnswers.push({
        questionId: currentQuestionId,
        answer,
        marked: false,
      });
    }

    setUserAnswers(updatedAnswers);
    setError("");
  };

  const toggleMark = () => {
    const updatedAnswers = [...userAnswers];

    const index = updatedAnswers.findIndex(
      (item) => item.questionId === currentQuestionId
    );

    if (index >= 0) {
      updatedAnswers[index] = {
        ...updatedAnswers[index],
        marked: !updatedAnswers[index].marked,
      };
    } else {
      updatedAnswers.push({
        questionId: currentQuestionId,
        answer: "",
        marked: true,
      });
    }

    setUserAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === quiz.length - 1) {
      setShowFinishModal(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const finishExam = () => {
    const score = calculateScore(quiz, userAnswers);

    localStorage.removeItem("js-quiz");
    localStorage.removeItem("js-answers");
    localStorage.removeItem("js-current-question");

    navigate("/result", {
      state: {
        score,
        total: quiz.length,
      },
    });
  };

            console.log(quiz[currentQuestion]);

  return (
    <QuizLayout>
      <div className="flex justify-end mb-6">
        <Timer minutes={50} onTimeUp={finishExam} />
      </div>

      <ProgressBar
        current={currentQuestion + 1}
        total={quiz.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 mt-8">
        <div>
          <button
            onClick={toggleMark}
            className={`mb-6 px-5 py-2 rounded-xl font-medium transition ${
              isMarked
                ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                : "bg-slate-200 hover:bg-slate-300 text-slate-700"
            }`}
          >
            {isMarked
              ? "⭐ Marked for Review"
              : "☆ Mark for Review"}
          </button>

          


<QuestionRenderer
  question={quiz[currentQuestion]}
  value={currentAnswer}
  onChange={handleAnswer}
/>

          {error && (
            <p className="mt-4 text-red-600 font-medium">
              {error}
            </p>
          )}

          <NavigationButtons
            currentQuestion={currentQuestion}
            totalQuestions={quiz.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        <QuestionNavigator
  questions={quiz}
  currentQuestion={currentQuestion}
  userAnswers={userAnswers}
  onSelectQuestion={setCurrentQuestion}
/>
      </div>

      {showFinishModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Finalizare simulare
            </h2>

            <p className="text-slate-600">
              Ești sigur că dorești să finalizezi simularea?
            </p>

            <p className="text-slate-500 mt-2">
              După finalizare nu vei mai putea modifica răspunsurile.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setShowFinishModal(false)}
                className="flex-1 py-3 rounded-xl bg-slate-200 hover:bg-slate-300"
              >
                Înapoi
              </button>

              <button
                onClick={finishExam}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Finalizează
              </button>
            </div>
          </div>
        </div>
      )}
    </QuizLayout>
  );
};

export default Quiz;