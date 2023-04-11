import type { UniqueIdentifier } from "@dnd-kit/core";
import type {
	StateDndCard,
	StateDnd,
} from "../../../../../state/recoil/stateDnd";

type Prop = {
	items: StateDnd[];
	id?: UniqueIdentifier;
};

type RetType = {
	index: number;
	area: string;
	cardIndex: number;
	card: StateDndCard;
	cardId: string;
	cardName: string;
	cardIcon?: string;
	cardType?: string;
	isLastCard: boolean;
};

export function getDndInfo(prop: Prop): RetType | undefined {
	const { items, id } = prop;

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const card = item.dndCard.find((card) => card.uuid === id?.toString());

		if (card && card.icon !== undefined) {
			return {
				index: i,
				area: item.dndArea,
				cardIndex: item.dndCard.indexOf(card),
				card,
				cardId: card.uuid.toString(),
				cardName: card.name.toString(),
				cardIcon: card.icon.toString(),
				isLastCard: item.dndCard.length <= 1,
			};
		}
		if (card && card.type !== undefined) {
			return {
				index: i,
				area: item.dndArea,
				cardIndex: item.dndCard.indexOf(card),
				card,
				cardId: card.uuid.toString(),
				cardName: card.name.toString(),
				cardType: card.type.toString(),
				isLastCard: item.dndCard.length <= 1,
			};
		}
	}

	return undefined;
}
