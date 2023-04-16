import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateGender } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Gender = (props: Prop) => {
  const { card } = props;

  const [gender, setGender] = useRecoilState(stateGender);

  const handleGenderChange = (event: any) => {
    setGender(event.target.value);
  };
  return (
    <>
      <div className="items-center">
        <p>性別</p>
      </div>
      <li className="mb-6 flex justify-center mt-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="男性"
            className="w-4 h-4 rounded"
            checked={gender === "男性"}
            onChange={handleGenderChange}
          />
          <label htmlFor="male" className="mx-2 text-sm font-medium">
            男性
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="female"
            name="gender"
            value="女性"
            className="w-4 h-4 rounded"
            checked={gender === "女性"}
            onChange={handleGenderChange}
          />
          <label htmlFor="female" className="mx-2 text-sm font-medium">
            女性
          </label>
        </div>
      </li>
    </>
  );
};

export default Gender;
