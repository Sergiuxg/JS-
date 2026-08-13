import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import type { UniqueIdentifier } from "@dnd-kit/core";

interface Props {
  id: UniqueIdentifier;
  text: string;
}

export default function SortableItem({
  id,
  text,
}: Props) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (

    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border rounded-lg p-4 bg-white shadow cursor-grab active:cursor-grabbing"
    >
      {text}
    </div>

  );

}