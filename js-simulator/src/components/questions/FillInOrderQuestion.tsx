import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import type { Question } from "../../types/Question";
import SortableItem from "../SortableItem";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export default function FillInOrderQuestion({
  question,
  value: _value,
  onChange,
}: Props) {

  if (!question.orderItems) {
    return null;
  }

  const [items, setItems] = useState(
  question.orderItems
);

  useEffect(() => {
    onChange(items.map((item: any) => item.id));
  }, [items]);

  const handleDragEnd = (event: DragEndEvent) => {

    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = items.findIndex(
      (item: any) => item.id === active.id
    );

    const newIndex = items.findIndex(
      (item: any) => item.id === over.id
    );

    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (

    <div className="space-y-6">

      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      {question.code && (
        <pre className="bg-slate-900 text-green-300 rounded-lg p-4 overflow-auto whitespace-pre-wrap">
          <code>{question.code}</code>
        </pre>
      )}

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >

        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >

          <div className="space-y-3">

            {items.map((item: any) => (

              <SortableItem
                key={item.id}
                id={item.id}
                text={item.text}
              />

            ))}

          </div>

        </SortableContext>

      </DndContext>

    </div>

  );

}