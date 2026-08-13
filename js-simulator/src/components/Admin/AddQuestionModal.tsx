import { useState } from "react";



interface AddQuestionModalProps {
  onClose: () => void;
}

const AddQuestionModal = ({ onClose }: AddQuestionModalProps) => {
  const [question, setQuestion] = useState("");

  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState(1);

  const [type, setType] = useState<
  "single" | "multiple" | "dropdown" | "code"
>("single");

  const handleSave = () => {
    console.log({
      question,
      answerA,
      answerB,
      answerC,
      answerD,
      correctAnswer,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Adaugă întrebare
        </h2>

        <div>

  <label className="block font-semibold mb-2">
    Tip întrebare
  </label>

  <select
    className="w-full border rounded-lg p-3"
    value={type}
    onChange={(e) =>
      setType(
        e.target.value as
          | "single"
          | "multiple"
          | "dropdown"
          | "code"
      )
    }
  >
    <option value="single">
      Single Choice
    </option>

    <option value="multiple">
      Multiple Choice
    </option>

    <option value="dropdown">
      Dropdown
    </option>

    <option value="code">
      Code
    </option>

  </select>

</div>

        <div className="space-y-5">

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Întrebare"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Răspuns A"
            value={answerA}
            onChange={(e) => setAnswerA(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Răspuns B"
            value={answerB}
            onChange={(e) => setAnswerB(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Răspuns C"
            value={answerC}
            onChange={(e) => setAnswerC(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Răspuns D"
            value={answerD}
            onChange={(e) => setAnswerD(e.target.value)}
          />

          <select
            className="w-full border rounded-lg p-3"
            value={correctAnswer}
            onChange={(e) =>
              setCorrectAnswer(Number(e.target.value))
            }
          >
            <option value={1}>A</option>
            <option value={2}>B</option>
            <option value={3}>C</option>
            <option value={4}>D</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg bg-gray-200"
          >
            Anulează
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white"
          >
            Salvează
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddQuestionModal;