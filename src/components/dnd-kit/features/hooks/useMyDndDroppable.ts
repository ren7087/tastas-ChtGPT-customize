import { useDroppable } from "@dnd-kit/core";

export const useMyDroppable = (dndArea: string) => {
	const { setNodeRef } = useDroppable({
		id: dndArea,
	});

	const droppableProps = {
		ref: setNodeRef,
	};

	return { droppableProps };
};
