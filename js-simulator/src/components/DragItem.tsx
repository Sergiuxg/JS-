import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { UniqueIdentifier } from "@dnd-kit/core";

interface Props {
  id: UniqueIdentifier;
  text: string;
}

export default function DragItem({
  id,
  text,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="
        bg-white
        border
        rounded-lg
        p-3
        shadow
        cursor-grab
        active:cursor-grabbing
        select-none
        transition
        hover:border-indigo-500
        hover:shadow-lg
      "
    >
      {text}
    </div>
  );
}