import { useRecoilState } from "recoil";
import { stateBrand } from "../../../../../../../../state/recoil/stateForm";

const Brand = () => {
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
