import type { ReactNode } from "react";

interface QuizLayoutProps {
  children: ReactNode;
}

const QuizLayout = ({ children }: QuizLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-indigo-700 shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-6">

          <h1 className="text-3xl font-bold text-white">
            JavaScript Exam Simulator
          </h1>

          <p className="text-indigo-100 mt-2">
            Simulare examen • 40 întrebări aleatorii
          </p>

        </div>

      </header>

      <main className="max-w-7xl mx-auto p-8">
        {children}
      </main>

    </div>
  );
};

export default QuizLayout;