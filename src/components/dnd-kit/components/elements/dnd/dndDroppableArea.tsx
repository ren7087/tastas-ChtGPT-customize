import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import { useRecoilValue } from "recoil";
import SortableList from "./dndSortableList";
import { useMyDroppable } from "../../../features/hooks/useMyDndDroppable";
import { stateDnd } from "../../../../../../state/recoil/stateDnd";

type Prop = {
	dndArea: string;
};

const DndDroppableArea = (prop: Prop) => {
	const { dndArea } = prop;

	const items = useRecoilValue(stateDnd);

	const { droppableProps } = useMyDroppable(dndArea);

	const index = items.findIndex((item) => item.dndArea === dndArea);

	const cardIds = items[index].dndCard.map((card) => card.uuid);

	return (
		<SortableContext items={cardIds} strategy={rectSortingStrategy}>
			<div
				className="flex items-center justify-center h-full"
				{...droppableProps}
			>
				<ul>
					{items[index].dndCard.map((card) => (
						<SortableList key={card.uuid} card={card} />
					))}
				</ul>
			</div>
		</SortableContext>
	);
};

export default DndDroppableArea;
