import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { stateTarget } from "../../../../../../../../state/recoil/stateForm";
import { useWindowSize } from "@/components/dnd-kit/features/hooks/useWindowSize";

const Target = React.memo(() => {
  const [target, setTarget] = useRecoilState(stateTarget);
  const [width] = useWindowSize();

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

  return (
    <>
      <div className="flex items-center justify-center">
        <p className="font-bold">ターゲット年齢</p>
        {/* <Image src="/hatena.svg" alt="年齢" width={20} height={20} /> */}
      </div>
      <ul
        className={`mb-6 mt-2 ${
          width > 777 ? "flex" : "flex flex-col items-center"
        } justify-center`}
      >
        {["10代", "20代", "30代", "40代", "50代以降"].map((ageGroup) => (
          <li key={ageGroup} className="flex items-center mb-2">
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
          </li>
        ))}
      </ul>
    </>
  );
});

Target.displayName = "Target";

export default Target;
