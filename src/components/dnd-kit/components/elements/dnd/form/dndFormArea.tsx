import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import { stateDnd } from "../../../../../../../state/recoil/stateDnd";
import { useRecoilState, useRecoilValue } from "recoil";
import DndFormList from "./dndFormList";
import {
  stateFree,
  stateWordCount,
} from "../../../../../../../state/recoil/stateForm";
import Gender from "./checkbox/gender";
import Target from "./checkbox/target";
import Category from "./textForm/category";
import Brand from "./textForm/brand";
import { useWindowSize } from "../../../../features/hooks/useWindowSize";

type Prop = {
  dndArea: string;
};

const DndFormArea = (prop: Prop) => {
  const { dndArea } = prop;
  const [width] = useWindowSize();
  const items = useRecoilValue(stateDnd);
  const index = items.findIndex((item) => item.dndArea === dndArea);
  const cardIds = items[index].dndCard.map((card) => card.uuid);

  const [free, setFree] = useRecoilState(stateFree);
  const handleFreeChange = (event: any) => {
    setFree(event.target.value);
  };
  const [wordCount, setWordCount] = useRecoilState(stateWordCount);
  const handleWordCountChange = (event: any) => {
    setWordCount(event.target.value);
  };

  return (
    <SortableContext items={cardIds} strategy={rectSortingStrategy}>
      <section className="w-25/100 mt-30px">
        <h2 className="text-3xl font-bold text-center">{dndArea}</h2>

        <ul className="flex-col-center gap-[2rem] mt-[2rem]">
          <li className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 font-bold text-gray-900"
            >
              商品が分かる情報
              <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                必須
              </text>
            </label>
            <textarea
              rows={3}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              value={free}
              onChange={handleFreeChange}
            />
          </li>
          {width > 777 ? (
            items[index].dndCard.map((card) =>
              card.name == "性別" ? (
                <Gender key={card.uuid} />
              ) : card.name == "ターゲット層" ? (
                <Target key={card.uuid} />
              ) : card.name == "カテゴリー" ? (
                <Category key={card.uuid} />
              ) : card.name == "ブランド" ? (
                <Brand key={card.uuid} />
              ) : card.name == "商品が分かる情報" ? (
                <DndFormList key={card.uuid} card={card} />
              ) : null
            )
          ) : (
            <>
              <Gender />
              <Target />
              <Category />
              <Brand />
            </>
          )}

          <li className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 font-bold text-gray-900"
            >
              文字数
            </label>
            <div className="flex justify-center">
              <input
                type="text"
                className="block w-1/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                value={wordCount}
                onChange={handleWordCountChange}
              />
            </div>
          </li>
        </ul>
      </section>
    </SortableContext>
  );
};

export default DndFormArea;
