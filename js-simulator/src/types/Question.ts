import type Answer from "./Answer";

export type QuestionType =
  | "single"
  | "multiple_choice"
  | "dropdown"
  | "matching"
  | "fill_in_order"
  | "drag_drop"
  | "trueFalseGroup";

export interface DropdownOption {
  id: number;
  text: string;
}


export interface DropZone {
  id: number;
  correctItemId: number;
}
export interface UserAnswer {

    questionId: number;

    answer: unknown;

}
export interface Dropdown {
  id: number;
  label?: string;
  options: DropdownOption[];
  correctOptionId: number;
}

export interface TrueFalseStatement {
  id: number;
  text: string;
  correct: boolean;
}
export interface MatchingItem {
  id: number;
  text: string;
  correctId?: number;
}
export interface MatchingMap {
  [leftId: string]: number;
}
export interface DragDropItem {
  id: number;
  text: string;
}

export interface OrderItem {
  id: number;
  text: string;
}

export interface QuestionGroup {
  question: string;
  options: Answer[];
  correctOptionId: number;
}

export interface Question {
  id: number;


  groups?: QuestionGroup[];
  type: QuestionType;

  question: string;

  description?: string;

  explanation?: string;

  code?: string;

  options?: Answer[];

  correctOptionId?: number;

  correctOptionIds?: number[];
slots?: number;

  dropdowns?: Dropdown[];

  statements?: TrueFalseStatement[];

  dragDropItems?: DragDropItem[];

orderItems?: OrderItem[];

dropZones?: DropZone[];

leftItems?: MatchingItem[];

rightItems?: MatchingItem[];

correctMatches?: MatchingMap;

correctOrder?: number[];
}