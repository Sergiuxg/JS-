interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-8">

      <button
        disabled={currentQuestion === 0}
        onClick={onPrevious}
        className="px-6 py-3 rounded-lg bg-gray-500 text-white disabled:opacity-40"
      >
        Înapoi
      </button>

      <button
        onClick={onNext}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white"
      >
        {currentQuestion === totalQuestions - 1
          ? "Finalizează"
          : "Următoarea"}
      </button>

    </div>
  );
};

export default NavigationButtons;