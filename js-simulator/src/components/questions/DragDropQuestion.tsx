import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
} from "@dnd-kit/core";

import type { Question } from "../../types/Question";

import DragItem from "../DragItem";
import DropZone from "../DropZone";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function DragDropQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.dragDropItems || !question.dropZones) {
    return null;
  }

  const [placements, setPlacements] = useState<Record<number, number>>(
    value ?? {}
  );

  const handleDragEnd = (event: DragEndEvent) => {

    const { active, over } = event;

    if (!over) return;

    const zoneId = Number(over.id);
    const itemId = Number(active.id);

    const updated = {
      ...placements,
      [zoneId]: itemId,
    };

    setPlacements(updated);
    onChange(updated);

  };

  const getItemText = (itemId: number) => {
    return (
      question.dragDropItems?.find(
        (item) => item.id === itemId
      )?.text ?? ""
    );
  };

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-gray-900 text-green-300 rounded-lg p-4 overflow-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <DndContext onDragEnd={handleDragEnd}>

        <div className="grid grid-cols-2 gap-8">

          <div>

            <h3 className="font-semibold mb-4">
              Choices
            </h3>

            <div className="space-y-3">

              {question.dragDropItems.map((item) => (

                <DragItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                />

              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Drop Zones
            </h3>

            <div className="space-y-3">

              {question.dropZones.map((zone) => (

                <DropZone
                  key={zone.id}
                  id={zone.id}
                  text={
                    placements[zone.id]
                      ? getItemText(
                          placements[zone.id]
                        )
                      : undefined
                  }
                />

              ))}

            </div>

          </div>

        </div>

      </DndContext>

    </div>
  );
}