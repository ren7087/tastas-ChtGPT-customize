import { DndContext } from "@dnd-kit/core";
import DndDroppableArea from "./dndDroppableArea";
import { useMyDndContext } from "../../../features/hooks/useMyDndContext";
import DndFormArea from "./form/dndFormArea";
import axios from "axios";
import { useRecoilState } from "recoil";
import { stateFree } from "../../../../../../state/recoil/stateForm";
import Modal from "../../modal";
import { useState } from "react";

const DndWrapper = () => {
  const { dndContextProps } = useMyDndContext();
  const [free, setFree] = useRecoilState(stateFree);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [res, setRes] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const whoAreYou = "You are an excellent Writer.";
  const outPutStyle =
    "The output should be a markdown code snippet formatted in the following schema in Japanese";

  const outPutFormat = `
		{
			"本文": string,
			"おすすめポイント": string
		}
		`;

  const note = `NOTES:
	* Please Create a passage within 200 characters.
	* Please make the text as appealing as possible for selling on a flea market app.
	* as detailed as possible
	* Please do not include anything other than JSON in your answer.
	* Response must be Japanese`;

  const callAI = async () => {
    const res = await axios.get(
      "/api/chatgpt?chat=" +
        whoAreYou +
        outPutStyle +
        outPutFormat +
        note +
        free
    );
    const data = await res.data;
    console.log(data);
    console.log(data.chat);
    setRes(data.chat);
    setIsModalOpen(true);
  };

  return (
    <>
      <DndContext {...dndContextProps}>
        <div className="w-2/3 text-center bg-gray-100 p-10 rounded-lg">
          <DndFormArea dndArea={"inputForm"} />
          <button
            onClick={() => {
              callAI();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Submit
          </button>
        </div>
        <div className="w-1/3">
          <DndDroppableArea dndArea={"dndArea1"} />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">結果</h2>
          <p>{res}</p>
        </Modal>
      </DndContext>
    </>
  );
};
export default DndWrapper;
