import { DndContext } from "@dnd-kit/core";
import DndDroppableArea from "./dndDroppableArea";
import { useMyDndContext } from "../../../features/hooks/useMyDndContext";
import DndFormArea from "./form/dndFormArea";

const DndWrapper = () => {
	const { dndContextProps } = useMyDndContext();

	return (
		<>
			<DndContext {...dndContextProps}>
				<div className="w-2/3 text-center bg-gray-100 p-10 rounded-lg">
					<DndFormArea dndArea={"inputForm"} />
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
						Submit
					</button>
				</div>
				<div className="w-1/3">
					<DndDroppableArea dndArea={"dndArea1"} />
				</div>
			</DndContext>
		</>
	);
};
export default DndWrapper;
