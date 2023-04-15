import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateGender } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Gender = (props: Prop) => {
  const { card } = props;

  const { sortableProp } = useMySortable(card.uuid);

  const [gender, setGender] = useRecoilState(stateGender);

  const handleGenderChange = (event: any) => {
    setGender(event.target.value);
  };
  return (
    <>
      <li className="mb-6 flex">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="男性"
            className="w-4 h-4 rounded"
            onChange={handleGenderChange}
          />
          <label
            htmlFor="default-checkbox"
            className="mx-2 text-sm font-medium"
          >
            男性
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="女性"
            className="w-4 h-4 rounded"
            onChange={handleGenderChange}
          />
          <label
            htmlFor="checked-checkbox"
            className="mx-2 text-sm font-medium"
          >
            女性
          </label>
        </div>
      </li>
    </>
  );
};

export default Gender;
