import { useState } from "react";
import { Code2, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();



  const [showModal, setShowModal] = useState(false);

  const startNewQuiz = () => {

  localStorage.removeItem("js-quiz");
  localStorage.removeItem("js-answers");
  localStorage.removeItem("js-current-question");

  navigate("/quiz");

};

  const continueQuiz = () => {
    navigate("/quiz");
  };

  const handleStart = () => {
    const savedQuiz = localStorage.getItem("js-quiz");

    if (savedQuiz) {
      setShowModal(true);
    } else {
      startNewQuiz();
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-12">

        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
            <Code2 size={48} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-slate-800">
          JavaScript Exam Simulator
        </h1>

        <p className="text-center text-slate-500 mt-4 text-lg">
          Exersează examenul într-un mediu cât mai apropiat de cel real.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">

          <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-4">
            <CheckCircle className="text-green-600" />
            <span>40 întrebări aleatorii</span>
          </div>

          <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-4">
            <CheckCircle className="text-green-600" />
            <span>Variante amestecate</span>
          </div>

          <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-4">
            <CheckCircle className="text-green-600" />
            <span>Scor calculat automat</span>
          </div>

          <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-4">
            <CheckCircle className="text-green-600" />
            <span>Poți reveni la întrebările anterioare</span>
          </div>

        </div>

        <div className="mt-10 rounded-xl bg-indigo-50 border border-indigo-200 p-5">

          <h2 className="font-semibold text-indigo-700 mb-2">
            Instrucțiuni
          </h2>

          <ul className="list-disc ml-5 text-slate-600 space-y-2">
            <li>Citește cu atenție fiecare întrebare.</li>
            <li>Selectează răspunsul corect.</li>
            <li>Poți reveni la orice întrebare.</li>
            <li>Rezultatul va fi afișat la final.</li>
          </ul>

        </div>

        <button
          onClick={handleStart}
          className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 transition text-white text-lg font-semibold py-4 rounded-xl shadow-lg"
        >
          Începe simularea
        </button>

        <button
          onClick={() => navigate("/admin")}
          className="mt-4 w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition py-4 rounded-xl font-semibold"
        >
          Administrare întrebări
        </button>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 w-full max-w-md">

            <h2 className="text-2xl font-bold mb-4">
              Examen salvat
            </h2>

            <p className="text-slate-600">
              Ai deja o simulare începută.
            </p>

            <p className="text-slate-500 mt-2">
              Vrei să continui sau să începi o simulare nouă?
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={continueQuiz}
                className="flex-1 py-3 rounded-xl bg-slate-200 hover:bg-slate-300"
              >
                Continuă
              </button>

              <button
                onClick={startNewQuiz}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Simulare nouă
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default Home;