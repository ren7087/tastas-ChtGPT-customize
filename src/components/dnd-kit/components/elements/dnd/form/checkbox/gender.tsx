import { useRecoilState } from "recoil";
import { stateGender } from "../../../../../../../../state/recoil/stateForm";

const Gender = () => {
  const [gender, setGender] = useRecoilState(stateGender);

  const handleGenderChange = (event: any) => {
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
  return (
    <>
      <div className="items-center">
        <p>性別</p>
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
            <label htmlFor={genderGroup} className="mx-2 text-sm font-medium">
              {genderGroup}
            </label>
          </div>
        ))}
      </li>
    </>
  );
};

export default Gender;
