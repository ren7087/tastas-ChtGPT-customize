import { useMySortable } from "@/components/dnd-kit/features/hooks/useMyDndSortable";
import { useRecoilState } from "recoil";
import { StateDndCard } from "../../../../../../../../state/recoil/stateDnd";
import { stateBrand } from "../../../../../../../../state/recoil/stateForm";

type Prop = {
  card: StateDndCard;
};

const Brand = (props: Prop) => {
  const { card } = props;

  const [brand, setBrand] = useRecoilState(stateBrand);
  const handleBrandChange = (event: any) => {
    setBrand(event.target.value);
  };
  return (
    <li className="mb-6">
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        ブランド
      </label>
      <input
        type="text"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        value={brand}
        onChange={handleBrandChange}
      />
    </li>
  );
};

export default Brand;
