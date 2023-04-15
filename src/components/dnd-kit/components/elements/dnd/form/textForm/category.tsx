import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateCategory } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Category = (props: Prop) => {
  const { card } = props;

  const { sortableProp } = useMySortable(card.uuid);

  const [category, setCategory] = useRecoilState(stateCategory);
  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };
  return (
    <li className="mb-6">
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        カテゴリー
      </label>
      <input
        type="text"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        value={category}
        onChange={handleCategoryChange}
      />
    </li>
  );
};

export default Category;
