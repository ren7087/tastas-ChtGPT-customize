import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import { stateDnd } from "../../../../../../../state/recoil/stateDnd";
import { useRecoilState, useRecoilValue } from "recoil";
import DndFormList from "./dndFormList";
import { stateFree } from "../../../../../../../state/recoil/stateForm";
import React from "react";

type Prop = {
  dndArea: string;
};

const DndFormArea = React.memo((prop: Prop) => {
  const { dndArea } = prop;
  const items = useRecoilValue(stateDnd);
  const index = items.findIndex((item) => item.dndArea === dndArea);
  const cardIds = items[index].dndCard.map((card) => card.uuid);

  const [free, setFree] = useRecoilState(stateFree);
  const handleFreeChange = (event: any) => {
    setFree(event.target.value);
  };

  return (
    <SortableContext items={cardIds} strategy={rectSortingStrategy}>
      <section className="w-25/100 mt-30px">
        <h2 className="text-2xl font-bold text-center">{dndArea}</h2>

        <ul className="flex-col-center gap-[2rem] mt-[2rem]">
          {items[index].dndCard.map((card) => (
            <DndFormList key={card.uuid} card={card} />
          ))}
          <li className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              自由記載欄
            </label>
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              value={free}
              onChange={handleFreeChange}
            />
          </li>
        </ul>
      </section>
    </SortableContext>
  );
});

DndFormArea.displayName = "DndFormArea";

export default DndFormArea;
