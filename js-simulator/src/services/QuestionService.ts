import { questions } from "../data/questions";
import type { Question } from "../types/Question";

class QuestionService {
  private data: Question[] = [...questions];

  getAll() {
    return this.data;
  }

  add(question: Question) {
    this.data.push(question);
  }

  delete(id: number) {
    this.data = this.data.filter(
      question => question.id !== id
    );
  }

  update(updatedQuestion: Question) {
    this.data = this.data.map(question =>
      question.id === updatedQuestion.id
        ? updatedQuestion
        : question
    );
  }
}

export default new QuestionService();