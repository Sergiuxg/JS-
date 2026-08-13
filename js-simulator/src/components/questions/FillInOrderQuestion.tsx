import { useEffect, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import type { Question } from "../../types/Question";

import DragItem from "../DragItem";
import DropZone from "../DropZone";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function FillInOrderQuestion({
  question,
  value,
  onChange,
}: Props) {

  if (!question.orderItems) {
    return null;
  }

  const [availableItems, setAvailableItems] = useState(
    question.orderItems
  );

  const [slots, setSlots] = useState<(typeof question.orderItems[number] | null)[]>(
    Array(question.slots ?? question.correctOrder?.length ?? 0).fill(null)
  );

  useEffect(() => {

    onChange(
      slots.map(item => item?.id ?? null)
    );

  }, [slots]);

  const handleDragEnd = (event: DragEndEvent) => {

    const { active, over } = event;

    if (!over) return;

    const dragged =
      availableItems.find(
        item => item.id === active.id
      );

    if (!dragged) return;

    const slotIndex = Number(over.id);

    if (slots[slotIndex]) return;

    const newSlots = [...slots];
    newSlots[slotIndex] = dragged;

    setSlots(newSlots);

    setAvailableItems(
      availableItems.filter(
        item => item.id !== dragged.id
      )
    );

  };

  const removeItem = (index: number) => {

    if (!slots[index]) return;

    setAvailableItems([
      ...availableItems,
      slots[index]!,
    ]);

    const newSlots = [...slots];

    newSlots[index] = null;

    setSlots(newSlots);

  };

  return (

    <div className="space-y-8">

      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      {question.code && (

        <pre className="bg-slate-900 text-green-300 rounded-xl p-5 overflow-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>

      )}

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <h3 className="font-semibold mb-4">
              Available Code
            </h3>

            <SortableContext
              items={availableItems}
              strategy={verticalListSortingStrategy}
            >

              <div className="space-y-3">

                {availableItems.map(item => (

                  <DragItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                  />

                ))}

              </div>

            </SortableContext>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Arrange Here
            </h3>

            <div className="space-y-3">

              {slots.map((item, index) => (

                <DropZone
                  key={index}
                  id={index}
                >

                  {item ? (

                    <div
                      className="bg-indigo-100 rounded-lg p-3 cursor-pointer"
                      onClick={() =>
                        removeItem(index)
                      }
                    >
                      {item.text}
                    </div>

                  ) : (

                    <div className="text-slate-400">
                      Drop code here
                    </div>

                  )}

                </DropZone>

              ))}

            </div>

          </div>

        </div>

      </DndContext>

    </div>

  );

}