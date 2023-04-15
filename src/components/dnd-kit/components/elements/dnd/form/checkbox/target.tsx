import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateTarget } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Target = (props: Prop) => {
  const { card } = props;

  const { sortableProp } = useMySortable(card.uuid);

  const [target, setTarget] = useRecoilState(stateTarget);

  const handleTargetChange = (event: any) => {
    setTarget(event.target.value);
  };
  return (
    <li className="mb-6 flex">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="10代"
          className="w-4 h-4 rounded"
          onChange={handleTargetChange}
        />
        <label htmlFor="default-checkbox" className="mx-2 text-sm font-medium">
          10代
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="20代"
          className="w-4 h-4 rounded"
          onChange={handleTargetChange}
        />
        <label htmlFor="checked-checkbox" className="mx-2 text-sm font-medium">
          20代
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked
          type="checkbox"
          name="30代"
          className="w-4 h-4 rounded"
          onChange={handleTargetChange}
        />
        <label htmlFor="checked-checkbox" className="mx-2 text-sm font-medium">
          30代
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked
          type="checkbox"
          name="40代"
          className="w-4 h-4 rounded"
          onChange={handleTargetChange}
        />
        <label htmlFor="checked-checkbox" className="mx-2 text-sm font-medium">
          40代
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked
          type="checkbox"
          name="それ以外"
          className="w-4 h-4 rounded"
          onChange={handleTargetChange}
        />
        <label htmlFor="checked-checkbox" className="mx-2 text-sm font-medium">
          それ以外
        </label>
      </div>
    </li>
  );
};

export default Target;
