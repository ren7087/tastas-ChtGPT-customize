import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import { stateDnd } from "../../../../../../../state/recoil/stateDnd";
import { useRecoilValue } from "recoil";
import DndFormList from "./dndFormList";

type Prop = {
	dndArea: string;
};

const DndFormArea = (prop: Prop) => {
	const { dndArea } = prop;

	const items = useRecoilValue(stateDnd);

	const index = items.findIndex((item) => item.dndArea === dndArea);

	const cardIds = items[index].dndCard.map((card) => card.uuid);

	return (
		<SortableContext items={cardIds} strategy={rectSortingStrategy}>
			<section className="w-25/100 mt-30px">
				<h2 className="text-2xl font-bold text-center">{dndArea}</h2>

				<ul className="flex-col-center gap-[2rem] mt-[2rem]">
					{items[index].dndCard.map((card) => (
						<DndFormList key={card.uuid} card={card} />
					))}
				</ul>
			</section>
		</SortableContext>
	);
};

export default DndFormArea;
