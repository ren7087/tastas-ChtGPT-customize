import Loading from "@/components/dnd-kit/components/loading";
import Modal from "@/components/dnd-kit/components/modal";
import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import { Knowledge } from "../../../types/knowledge";

const Knowledge = () => {
  const fetchKnowledgeData = async () => {
    setIsLoading(true);
    const response = await fetch("/api/knowledge");
    const { data } = await response.json();
    setIsLoading(false);
    return data;
  };
  const [knowledgeData, setKnowledgeData] = useState<Knowledge[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeBracketsAndQuotes = (tagContext: any) => {
    return tagContext.replace(/\["|","|"\]/g, "");
  };

  useEffect(() => {
    fetchKnowledgeData()
      .then((data) => setKnowledgeData(data.reverse()))
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return (
      <>
        <HeaderComponent />
        <Loading />
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <div className="flex justify-center p-10 flex-wrap">
        {knowledgeData.map((item: Knowledge) => (
          <div
            className="max-w-sm rounded-xl overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/4 p-4 m-1 cursor-pointer hover:bg-blue-300"
            key={item.id}
            onClick={() => {
              openModal();
              setModalContent(item.responseText);
            }}
          >
            <div className="flex justify-center bg-gray-800 p-14 rounded-xl">
              <span className="text-5xl">🐏</span>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.gender !== `[]` && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {removeBracketsAndQuotes(item.gender)}
                </span>
              )}
              {item.target !== `[]` && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {removeBracketsAndQuotes(item.target)}
                </span>
              )}
              {item.brand && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {removeBracketsAndQuotes(item.brand)}
                </span>
              )}
              {item.category && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {removeBracketsAndQuotes(item.category)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">説明文</h2>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
};

export default Knowledge;
