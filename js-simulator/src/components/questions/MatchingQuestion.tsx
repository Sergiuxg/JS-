import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import type { Question } from "../../types/Question";

import DragItem from "../DragItem";
import DropZone from "../DropZone";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function MatchingQuestion({
  question,
  value,
  onChange,
}: Props) {
  if (!question.leftItems || !question.rightItems) {
    return null;
  }

  const leftItems = question.leftItems;
  const rightItems = question.rightItems;

  // cheia = id-ul din dreapta
  // valoarea = id-ul din stânga
  const [matches, setMatches] = useState<Record<number, number>>(
    value ?? {}
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const leftId = Number(active.id);
    const rightId = Number(over.id);

    const updated = {
      ...matches,
      [rightId]: leftId,
    };

    setMatches(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-8">

      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-slate-900 text-green-300 rounded-lg p-4 overflow-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <DndContext onDragEnd={handleDragEnd}>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="font-semibold mb-3">
              Left
            </h3>

            <div className="space-y-3">

              {leftItems.map((item) => (

                <DragItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                />

              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-3">
              Match Here
            </h3>

            <div className="space-y-3">

              {rightItems.map((item) => {

                const selectedLeftId = matches[item.id];

                const selectedText =
                  leftItems.find(
                    left => left.id === selectedLeftId
                  )?.text;

                return (

                  <DropZone
                    key={item.id}
                    id={item.id}
                    text={
                      selectedText ?? item.text
                    }
                  />

                );

              })}

            </div>

          </div>

        </div>

      </DndContext>

    </div>
  );
}