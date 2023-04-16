import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateTarget } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Target = (props: Prop) => {
  const { card } = props;

  const [target, setTarget] = useRecoilState(stateTarget);

  const handleTargetChange = (event: any) => {
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

  return (
    <>
      <div className="items-center">
        <p>年齢</p>
      </div>
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
    </>
  );
};

export default Target;
