import type { Question } from "../../types/Question";
import SingleQuestion from "../questions/SingleQuestion";
import MultipleChoiceQuestion from "../questions/MultipleChoiceQuestion";
import DropdownQuestion from "../questions/DropdownQuestion";
import DragDropQuestion from "../questions/DragDropQuestion";
import MatchingQuestion from "../questions/MatchingQuestion";
import FillInOrderQuestion from "../questions/FillInOrderQuestion";
import TrueFalseGroupQuestion from "../questions/TrueFalseGroupQuestion";

interface Props {
    question: Question;
    value: any;
    onChange: (value:any)=>void;
}

export default function QuestionRenderer({
  question,
  value,
  onChange,
}: Props) {

    switch (question.type) {

        case "single":
    return (
        <SingleQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

        case "multiple_choice":
    return (
        <MultipleChoiceQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

case "dropdown":
    return (
        <DropdownQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

case "drag_drop":
    return (
        <DragDropQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

case "matching":
    return (
        <MatchingQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

case "fill_in_order":
    return (
        <FillInOrderQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

case "trueFalseGroup":
    return (
        <TrueFalseGroupQuestion
            question={question}
            value={value}
            onChange={onChange}
        />
    );

        default:
            return <div>Unknown question type.</div>;
    }

}