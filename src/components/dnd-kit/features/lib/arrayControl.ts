import { arrayMove } from "@dnd-kit/sortable";
import type {
	StateDnd,
	StateDndCard,
} from "../../../../../state/recoil/stateDnd";

export function removeCardIndex<T extends StateDnd>(item: T, id: string): T {
	return { ...item, dndCard: item.dndCard.filter((card) => card.uuid !== id) };
}

export function insertCardIndex<T extends StateDnd>(
	item: T,
	dragCard: StateDndCard,
	overIndex: number
): T {
	return {
		...item,
		dndCard: [
			...item.dndCard.slice(0, overIndex),
			dragCard,
			...item.dndCard.slice(overIndex),
		],
	};
}

export function moveCard<T extends StateDnd>(
	item: T,
	dragIndex: number,
	overIndex: number
): T {
	return { ...item, dndCard: arrayMove(item.dndCard, dragIndex, overIndex) };
}
