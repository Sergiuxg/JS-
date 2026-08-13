import { useDroppable } from "@dnd-kit/core";
import type { UniqueIdentifier } from "@dnd-kit/core";

interface Props {
  id: UniqueIdentifier;
  text?: string;
}

export default function DropZone({
  id,
  text,
}: Props) {

  const {
    isOver,
    setNodeRef,
  } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        min-h-[60px]
        rounded-lg
        border-2
        border-dashed
        p-3
        flex
        items-center
        transition-all
        ${
          isOver
            ? "border-indigo-600 bg-indigo-100"
            : "border-slate-300"
        }
      `}
    >
      {text ?? (
        <span className="text-slate-400">
          Drop here
        </span>
      )}
    </div>
  );
}