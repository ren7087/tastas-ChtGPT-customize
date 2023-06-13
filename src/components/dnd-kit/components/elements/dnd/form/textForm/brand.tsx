import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { stateBrand } from "../../../../../../../../state/recoil/stateForm";

const Brand = React.memo(() => {
  const [brand, setBrand] = useRecoilState(stateBrand);
  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };
  return (
    <li className="mb-6">
      <label
        htmlFor="large-input"
        className="block mb-2 font-bold text-gray-900"
      >
        ブランド
      </label>
      <input
        type="text"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        value={brand}
        onChange={handleBrandChange}
        placeholder="ex) ユニクロ"
      />
    </li>
  );
});

Brand.displayName = "Brand";

export default Brand;
