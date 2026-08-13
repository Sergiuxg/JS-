import type { Question } from "../types/Question";
import { shuffle } from "./shuffle";

export function generateExam(
  questions: Question[],
  count = 40
): Question[] {

  const exam = shuffle([...questions])
    .slice(0, count)
    .map((question) => {

      const q = structuredClone(question);

      switch (q.type) {

        case "single":
        case "multiple_choice":

          if (q.options) {
            q.options = shuffle([...q.options]);
          }

          break;

        case "dropdown":

          if (q.dropdowns) {

            q.dropdowns = q.dropdowns.map(dropdown => ({
              ...dropdown,
              options: shuffle([...dropdown.options]),
            }));

          }

          break;

        case "drag_drop":

          if (q.orderItems) {
  q.orderItems = shuffle([...q.orderItems]);
}
          break;

        case "matching":

          if (q.rightItems) {
            q.rightItems = shuffle([...q.rightItems]);
          }

          break;

        case "fill_in_order":

          if (q.orderItems) {
  q.orderItems = shuffle([...q.orderItems]);
}

          break;

      }

      return q;

    });

  return exam;

}