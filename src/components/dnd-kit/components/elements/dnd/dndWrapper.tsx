import { DndContext } from "@dnd-kit/core";
import DndDroppableArea from "./dndDroppableArea";
import { useMyDndContext } from "../../../features/hooks/useMyDndContext";
import DndFormArea from "./form/dndFormArea";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  stateBrand,
  stateCategory,
  stateFree,
  stateGender,
  stateTarget,
} from "../../../../../../state/recoil/stateForm";
import Modal from "../../modal";
import { useState } from "react";
import Loading from "../../loading";

const DndWrapper = () => {
  const { dndContextProps } = useMyDndContext();
  const [free, setFree] = useRecoilState(stateFree);
  const [gender, setGender] = useRecoilState(stateGender);
  const [target, setTarget] = useRecoilState(stateTarget);
  const [brand, setBrand] = useRecoilState(stateBrand);
  const [category, setCategory] = useRecoilState(stateCategory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prompt = free + gender + target + brand + category;

  const callAI = async () => {
    await axios({
      url: "/api/praise",
      method: "POST",
      data: { prompt },
      onDownloadProgress: (progressEvent: any) => {
        const dataChunk = progressEvent.event.target.response;
        setResponseText(dataChunk);
      },
    }).catch(() => {});
    setIsLoading(false);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DndContext {...dndContextProps}>
        <div className="w-2/3 text-center bg-gray-100 p-10 rounded-lg">
          <DndFormArea dndArea={"inputForm"} />
          <button
            onClick={() => {
              setIsLoading(true);
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
          <p>{responseText}</p>
        </Modal>
      </DndContext>
    </>
  );
};
export default DndWrapper;
