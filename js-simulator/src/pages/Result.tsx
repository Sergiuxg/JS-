import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { score, total } = location.state;

  const percentage = Math.round((score / total) * 100);

  const passed = percentage >= 70;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-10">

        <h1 className="text-4xl font-bold text-center text-slate-800">
          Simulare finalizată
        </h1>

        <div className="flex justify-center mt-10">

          <div
            className={`
              w-44
              h-44
              rounded-full
              flex
              items-center
              justify-center
              text-5xl
              font-bold
              text-white
              ${
                passed
                  ? "bg-green-500"
                  : "bg-red-500"
              }
            `}
          >
            {percentage}%
          </div>

        </div>

        <p className="text-center text-2xl font-semibold mt-8">
          {score} / {total} răspunsuri corecte
        </p>

        <div className="mt-8 text-center">

          {passed ? (
            <div>
              <h2 className="text-3xl font-bold text-green-600">
                ✅ PROMOVAT
              </h2>

              <p className="text-slate-500 mt-2">
                Ai obținut minimum 70%.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-red-600">
                ❌ RESPINS
              </h2>

              <p className="text-slate-500 mt-2">
                Pentru promovare este necesar minimum 70%.
              </p>
            </div>
          )}

        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">

          <button
            onClick={() => navigate("/")}
            className="py-4 rounded-xl bg-slate-200 hover:bg-slate-300 font-semibold transition"
          >
            Acasă
          </button>

          <button
            onClick={() => navigate("/quiz")}
            className="py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
          >
            Test nou
          </button>

        </div>

      </div>

    </div>
  );
};

export default Result;