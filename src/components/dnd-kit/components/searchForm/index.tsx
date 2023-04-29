import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { stateKnowledge } from "../../../../../state/recoil/stateKnowledge";
import supabase from "../../../../../utils/supabase";

const SearchForm = () => {
  const [knowledgeData, setKnowledgeData] = useRecoilState(stateKnowledge);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [gender, setGender] = useState<string[]>([]);
  const [target, setTarget] = useState<string[]>([]);

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

  const searchKnowledge = async () => {
    let result;

    if (gender.length > 0 && target.length === 0) {
      const { data, error } = await supabase
        .from("knowledge")
        .select("*")
        .ilike("gender", `%${gender}%`);

      result = data;
    } else if (gender.length === 0 && target.length > 0) {
      const { data, error } = await supabase
        .from("knowledge")
        .select("*")
        .ilike("target", `%${target}%`);

      result = data;
    } else if (gender.length > 0 && target.length > 0) {
      const { data, error } = await supabase
        .from("knowledge")
        .select("*")
        .ilike("gender", `%${gender}%`)
        .ilike("target", `%${target}%`);

      result = data;
    } else {
      return;
    }

    if (result) {
      //@ts-ignore
      setKnowledgeData(result);
    }
  };

  return (
    <div className="justify-center px-60 pt-10 hidden md:block">
      <button
        className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
        onClick={toggleAccordion}
      >
        {isOpen ? "検索フォームを閉じる" : "検索フォームを開く"}
      </button>
      {isOpen && (
        <section className="w-25/100">
          <ul className="flex-col-center gap-[2rem] mt-2 bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div>
              <div className="flex justify-center">
                <p className="font-bold">性別</p>
              </div>
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
            </div>
            <div>
              <div className="flex justify-center">
                <p className="font-bold">年齢</p>
              </div>
              <li className="mb-6 flex justify-center mt-2">
                {["10代", "20代", "30代", "40代"].map((ageGroup) => (
                  <div key={ageGroup} className="flex items-center">
                    <input
                      type="checkbox"
                      name={ageGroup}
                      className="w-4 h-4 rounded"
                      checked={target.includes(ageGroup)}
                      onChange={handleTargetChange}
                    />
                    <label
                      htmlFor={ageGroup}
                      className="mx-2 text-sm font-medium"
                    >
                      {ageGroup}
                    </label>
                  </div>
                ))}
              </li>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={searchKnowledge}
              >
                絞り込む
              </button>
            </div>
          </ul>
        </section>
      )}
    </div>
  );
};

export default SearchForm;
