import { useMySortable } from "../../../../features/hooks/useMyDndSortable";
import type { StateDndCard } from "../../../../../../../state/recoil/stateDnd";
import { useRecoilState } from "recoil";
import {
  stateBrand,
  stateCategory,
  stateGender,
  stateTarget,
} from "../../../../../../../state/recoil/stateForm";
import React, { ChangeEvent } from "react";

type Prop = {
  card: StateDndCard;
};

const DndFormList = React.memo((prop: Prop) => {
  const { card } = prop;
  const { uuid, type, name } = card;

  const { sortableProp } = useMySortable(uuid);

  const [gender, setGender] = useRecoilState(stateGender);
  const [target, setTarget] = useRecoilState(stateTarget);
  const [category, setCategory] = useRecoilState(stateCategory);
  const [brand, setBrand] = useRecoilState(stateBrand);

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    const checked = event.target.checked;

    setGender((prevGender) => {
      if (checked) {
        return [...prevGender, value];
      } else {
        return prevGender.filter((item) => item !== value);
      }
    });
  };
  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    const checked = event.target.checked;

    setTarget((prevTarget) => {
      if (checked) {
        return [...prevTarget, value];
      } else {
        return prevTarget.filter((item) => item !== value);
      }
    });
  };
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  if (type == "checkbox") {
    if (name == "性別") {
      return (
        <>
          <li className="mb-6 flex justify-center mt-2">
            {["男性", "女性"].map((genderGroup) => (
              <div key={genderGroup} className="flex items-center">
                <input
                  type="checkbox"
                  name={genderGroup}
                  className="w-4 h-4 rounded"
                  checked={gender.includes(genderGroup)}
                  onChange={handleGenderChange}
                />
                <label
                  htmlFor={genderGroup}
                  className="mx-2 text-sm font-medium"
                >
                  {genderGroup}
                </label>
              </div>
            ))}
          </li>
        </>
      );
    }
    if (name == "ターゲット層") {
      return (
        <li className="mb-6 flex justify-center mt-2">
          {["10代", "20代", "30代", "40代", "それ以外"].map((ageGroup) => (
            <div key={ageGroup} className="flex items-center">
              <input
                type="checkbox"
                name={ageGroup}
                className="w-4 h-4 rounded"
                checked={target.includes(ageGroup)}
                onChange={handleTargetChange}
              />
              <label htmlFor={ageGroup} className="mx-2 text-sm font-medium">
                {ageGroup}
              </label>
            </div>
          ))}
        </li>
      );
    }
  }

  if (type == "input") {
    return (
      <li className="mb-6" {...sortableProp}>
        <label
          htmlFor="large-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {name == "カテゴリー" && "カテゴリー"}
          {name == "ブランド" && "ブランド"}
        </label>
        {name == "カテゴリー" && (
          <input
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            value={category}
            onChange={handleCategoryChange}
            placeholder="ex) Tシャツ"
          />
        )}
        {name == "ブランド" && (
          <input
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            value={brand}
            onChange={handleBrandChange}
            placeholder="ex) ユニクロ"
          />
        )}
      </li>
    );
  }

  return null;
});

DndFormList.displayName = "DndFormList";

export default DndFormList;
