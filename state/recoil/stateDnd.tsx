import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type StateDndCard = {
  uuid: string;
  icon?: string;
  type?: string;
  name: string;
};

export type StateDnd = {
  dndArea: string;
  dndCard: StateDndCard[];
};

export const stateDnd = atom<StateDnd[]>({
  key: "stateDnd",

  default: [
    {
      dndArea: "dndArea1",
      dndCard: [
        { uuid: uuidv4(), icon: "gender", type: "checkbox", name: "性別" },
        {
          uuid: uuidv4(),
          icon: "target",
          type: "checkbox",
          name: "ターゲット層",
        },
        { uuid: uuidv4(), icon: "category", type: "input", name: "カテゴリー" },
        { uuid: uuidv4(), icon: "brand", type: "input", name: "ブランド" },
      ],
    },
    {
      dndArea: "inputForm",
      dndCard: [{ uuid: uuidv4(), type: "input", name: "商品が分かる情報" }],
    },
  ],
});
