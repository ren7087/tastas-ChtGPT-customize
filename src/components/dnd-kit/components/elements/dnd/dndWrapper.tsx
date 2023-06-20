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
  stateWordCount,
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
  const wordCount = useRecoilValue(stateWordCount);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wordCountError, setWordCountError] = useState<boolean>(false);
  const [freeWordError, setFreeWordError] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prompt =
    free + "," + gender + "," + target + "," + brand + "," + category;

  const callAI = async () => {
    if (free.length <= 0) {
      setFreeWordError(true);
      setIsLoading(false);
      setIsModalOpen(true);
      return;
    } else {
      setFreeWordError(false);
    }
    if (wordCount > 600) {
      //600文字以上を選択した時は、弾く
      setWordCountError(true);
      setIsLoading(false);
      setIsModalOpen(true);
      return;
    } else {
      setWordCountError(false);
    }
    await axios({
      url: "/api/praise",
      method: "POST",
      data: { prompt, wordCount },
      timeout: 50000, // タイムアウトを50秒（50000ミリ秒）に設定
      onDownloadProgress: (progressEvent: any) => {
        const dataChunk = progressEvent.event.target.response;
        setResponseText(dataChunk);
      },
    })
      // .then((result) => pushKnowledge(result.data))
      .then((result) => setResponseText(result.data))
      .catch((e) => console.log(e));
    setIsLoading(false);
    setIsModalOpen(true);
  };

  const removeQuotes = (responseText: any) => {
    return responseText.replace(/"/g, "");
  };

  const pushKnowledge = async (dataChunk: string) => {
    await supabase.from("knowledge").insert({
      gender,
      target,
      brand,
      category,
      responseText: removeQuotes(dataChunk),
    });
  };

  if (isLoading) {
    return <Loading text={"20秒ほどお待ちください"} />;
  }

  return (
    <>
      <DndContext {...dndContextProps}>
        <div className="w-full text-center bg-gray-100 p-7 rounded-lg">
          <DndFormArea dndArea={"inputForm"} />
          <button
            onClick={() => {
              setIsLoading(true);
              callAI();
            }}
            className="sm:w-2/5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Create
          </button>
        </div>
        <div className="md:w-1/3 hidden md:inline-block">
          <DndDroppableArea dndArea={"dndArea1"} />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">
            {wordCountError ? "エラー" : "結果"}
          </h2>
          <p>
            {wordCountError
              ? "・文字数は600以下に設定してください"
              : removeQuotes(responseText)}
          </p>
          <p>
            {freeWordError
              ? "・商品が分かる情報は必須項目です"
              : removeQuotes(responseText)}
          </p>
        </Modal>
      </DndContext>
    </>
  );
};
export default DndWrapper;
