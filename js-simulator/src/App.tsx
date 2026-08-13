import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Admin from "./pages/Admin";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/quiz"
  element={
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  }
/>
        <Route path="/result" element={<Result />} />
        <Route
    path="/admin"
    element={<Admin />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;