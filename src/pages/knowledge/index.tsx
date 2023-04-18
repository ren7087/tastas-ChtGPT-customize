import Modal from "@/components/dnd-kit/components/modal";
import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import { Knowledge } from "../../../types/knowledge";

const Knowledge = () => {
  const fetchKnowledgeData = async () => {
    const response = await fetch("/api/knowledge");
    const { data } = await response.json();
    return data;
  };
  const [knowledgeData, setKnowledgeData] = useState<Knowledge[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeBracketsAndQuotes = (tagContext: any) => {
    return tagContext.replace(/\["|"\]/g, "");
  };

  useEffect(() => {
    fetchKnowledgeData()
      .then((data) => setKnowledgeData(data))
      .catch((err) => console.error(err));
  }, []);

  if (isModalOpen) {
    return (
      <>
        <HeaderComponent />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">Response</h2>
          <p>{modalContent}</p>
        </Modal>
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <div className="flex p-10 flex-wrap">
        {knowledgeData.map((item: Knowledge) => (
          <div
            className="max-w-sm rounded-md overflow-hidden shadow-lg w-1/4 p-4 m-1 cursor-pointer"
            key={item.id}
            onClick={() => {
              openModal();
              setModalContent(item.responseText);
            }}
          >
            <img
              className="w-full"
              src="data:image/png;base64,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"
              alt="Sunset in the mountains"
            />
            <div className="px-6 pt-4 pb-2">
              {item.gender && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {removeBracketsAndQuotes(item.gender)}
                </span>
              )}
              {item.target && (
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
    </>
  );
};

export default Knowledge;
