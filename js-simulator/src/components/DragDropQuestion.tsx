import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import type { Question } from "../types/Question";

import DragItem from "./DragItem";
import DropZone from "./DropZone";

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

    const itemId = Number(active.id);
    const zoneId = Number(over.id);

    const updated = { ...placements };

    // dacă elementul exista deja într-o altă zonă îl scoatem
    Object.keys(updated).forEach((key) => {
      if (updated[Number(key)] === itemId) {
        delete updated[Number(key)];
      }
    });

    updated[zoneId] = itemId;

    setPlacements(updated);
    onChange(updated);
  };

  const placedItems = Object.values(placements);

  const availableItems = question.dragDropItems.filter(
    (item) => !placedItems.includes(item.id)
  );

  const getItemText = (itemId: number) => {
    return (
      question.dragDropItems?.find(
        (item) => item.id === itemId
      )?.text ?? ""
    );
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

            <h3 className="font-semibold mb-4">
              Available Items
            </h3>

            <div className="space-y-3">

              {availableItems.map((item) => (

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