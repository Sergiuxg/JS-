import QuestionService from "../../services/QuestionService";

const QuestionTable = () => {
    const questions = QuestionService.getAll();
  return (
    <div className="bg-white rounded-2xl shadow-lg mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="text-left p-4">ID</th>

            <th className="text-left p-4">
              Întrebare
            </th>

            <th className="text-center p-4">
              Răspunsuri
            </th>

            <th className="text-center p-4">
              Acțiuni
            </th>

          </tr>

        </thead>

        <tbody>

          {questions.map((question) => (

            <tr
              key={question.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="p-4 font-semibold">
                {question.id}
              </td>

              <td className="p-4">
                {question.question}
              </td>

              <td className="text-center">
  {question.options?.length ?? 0}
</td>

              <td className="text-center">

                <button className="mr-3">
                  ✏️
                </button>

                <button>
                  🗑️
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default QuestionTable;