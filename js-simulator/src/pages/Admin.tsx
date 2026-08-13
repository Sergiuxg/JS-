import QuizLayout from "../components/Layout/QuizLayout";
import QuestionTable from "../components/Admin/QuestionTable";
import { useState } from "react";

import AddQuestionModal from "../components/Admin/AddQuestionModal";


const Admin = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <QuizLayout>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center">

          <button
  onClick={() => setShowModal(true)}
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
>
  + Adaugă întrebare
</button>

        </div>
        <QuestionTable />

      </div>
      {showModal && (
  <AddQuestionModal
    onClose={() => setShowModal(false)}
  />
)}
    </QuizLayout>
  );
};

export default Admin;