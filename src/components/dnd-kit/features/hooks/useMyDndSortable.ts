import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SortabeleProp = {
	ref: (node: HTMLElement | null) => void;
	style: React.CSSProperties;
};

type RetType = {
	sortableProp: SortabeleProp;
};

export const useMySortable = (id: string): RetType => {
	const { setNodeRef, transform, transition, attributes, listeners } =
		useSortable({
			id,
		});

	const style: React.CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const sortableProp = {
		ref: setNodeRef,
		style,
		...attributes,
		...listeners,
	};

	return { sortableProp };
};
