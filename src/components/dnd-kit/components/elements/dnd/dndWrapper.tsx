import { DndContext } from "@dnd-kit/core";
import DndDroppableArea from "./dndDroppableArea";
import { useMyDndContext } from "../../../features/hooks/useMyDndContext";
import DndFormArea from "./form/dndFormArea";
import axios from "axios";
import { useRecoilValue } from "recoil";
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
import supabase from "../../../../../../utils/supabase";

const DndWrapper = () => {
  const { dndContextProps } = useMyDndContext();
  const free = useRecoilValue(stateFree);
  const gender = useRecoilValue(stateGender);
  const target = useRecoilValue(stateTarget);
  const brand = useRecoilValue(stateBrand);
  const category = useRecoilValue(stateCategory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prompt =
    free + "," + gender + "," + target + "," + brand + "," + category;

  const callAI = async () => {
    await axios({
      url: "/api/praise",
      method: "POST",
      data: { prompt },
      timeout: 50000, // タイムアウトを50秒（50000ミリ秒）に設定
      onDownloadProgress: (progressEvent: any) => {
        const dataChunk = progressEvent.event.target.response;
        setResponseText(dataChunk);
        pushKnowledge(dataChunk);
      },
    }).catch((e) => console.log(e));
    setIsLoading(false);
    setIsModalOpen(true);
  };

  const removeQuotes = (responseText: any) => {
    return responseText.replace(/"/g, "");
  };

  const pushKnowledge = async (dataChunk: any) => {
    await supabase.from("knowledge").insert({
      gender,
      target,
      brand,
      category,
      responseText: removeQuotes(dataChunk),
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DndContext {...dndContextProps}>
        <div className="md:w-2/3 w-full text-center bg-gray-100 p-10 rounded-lg">
          <DndFormArea dndArea={"inputForm"} />
          <button
            onClick={() => {
              setIsLoading(true);
              callAI();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Create
          </button>
        </div>
        <div className="md:w-1/3 hidden md:inline-block">
          <DndDroppableArea dndArea={"dndArea1"} />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">結果</h2>
          <p>{removeQuotes(responseText)}</p>
        </Modal>
      </DndContext>
    </>
  );
};
export default DndWrapper;
