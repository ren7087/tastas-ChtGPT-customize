import { useMySortable } from "../../../../features/hooks/useMyDndSortable";
import type { StateDndCard } from "../../../../../../../state/recoil/stateDnd";
import { useRecoilState } from "recoil";
import {
	stateBrand,
	stateCategory,
	stateFree,
	stateGender,
	stateTarget,
} from "../../../../../../../state/recoil/stateForm";
import React from "react";

type Prop = {
	card: StateDndCard;
};

const DndFormList = React.memo((prop: Prop) => {
	const { card } = prop;
	const { uuid, type, name } = card;

	const { sortableProp } = useMySortable(uuid);

	const [gender, setGender] = useRecoilState(stateGender);
	const [target, setTarget] = useRecoilState(stateTarget);
	const [category, setCategory] = useRecoilState(stateCategory);
	const [brand, setBrand] = useRecoilState(stateBrand);
	const [free, setFree] = useRecoilState(stateFree);

	const handleGenderChange = (event: any) => {
		setGender({ ...gender, [event.target.name]: event.target.checked });
	};
	const handleTargetChange = (event: any) => {
		setTarget({ ...target, [event.target.name]: event.target.checked });
	};
	const handleCategoryChange = (event: any) => {
		setCategory(event.target.value);
	};
	const handleBrandChange = (event: any) => {
		setBrand(event.target.value);
	};
	const handleFreeChange = (event: any) => {
		setFree(event.target.value);
	};

	if (type == "checkbox" && name == "性別") {
		return (
			<li className="mb-6 flex" {...sortableProp}>
				<div className="flex items-center">
					<input
						type="checkbox"
						name="女性"
						className="w-4 h-4 rounded"
						onChange={handleGenderChange}
					/>
					<label
						htmlFor="default-checkbox"
						className="mx-2 text-sm font-medium"
					>
						女性
					</label>
				</div>
				<div className="flex items-center">
					<input
						checked
						type="checkbox"
						name="男性"
						className="w-4 h-4 rounded"
						onChange={handleGenderChange}
					/>
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
						男性
					</label>
				</div>
				<div className="flex items-center">
					<input
						checked
						type="checkbox"
						name="それ以外"
						className="w-4 h-4 rounded"
						onChange={handleGenderChange}
					/>
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
						それ以外
					</label>
				</div>
			</li>
		);
	}

	if (type == "checkbox" && name == "ターゲット層") {
		return (
			<li className="mb-6 flex" {...sortableProp}>
				<div className="flex items-center">
					<input
						type="checkbox"
						name="10代"
						className="w-4 h-4 rounded"
						onChange={handleTargetChange}
					/>
					<label
						htmlFor="default-checkbox"
						className="mx-2 text-sm font-medium"
					>
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
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
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
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
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
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
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
					<label
						htmlFor="checked-checkbox"
						className="mx-2 text-sm font-medium"
					>
						それ以外
					</label>
				</div>
			</li>
		);
	}

	if (type == "input") {
		return (
			<li className="mb-6" {...sortableProp}>
				<label
					htmlFor="large-input"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{name}
				</label>
				{name == "カテゴリー" && (
					<input
						type="text"
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
						value={free}
						onChange={handleCategoryChange}
					/>
				)}
				{name == "ブランド" && (
					<input
						type="text"
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
						value={brand}
						onChange={handleBrandChange}
					/>
				)}
				{name == "自由記載欄" && (
					<input
						type="text"
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
						value={free}
						onChange={handleFreeChange}
					/>
				)}
			</li>
		);
	}

	return null;
});

DndFormList.displayName = "DndFormList";

export default DndFormList;
