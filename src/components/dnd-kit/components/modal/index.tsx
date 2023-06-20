import React, { useState } from "react";
import { ClipboardCopyIcon } from "@heroicons/react/outline";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, text, children }: ModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

  // テキストをコピーする関数
  const copyToClipboard = async () => {
    // ここで特定のテキストをコピーします
    // @ts-ignore
    await global.navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="p-6 overflow-y-auto max-h-96">{children}</div>
          <div className="flex items-center justify-end p-4 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-red-100"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button
              onClick={copyToClipboard}
              className={`p-2 rounded border-2 border-blue-500 transition duration-200 flex items-center ml-3 ${
                isCopied ? "bg-white text-blue-600" : "bg-blue-500 text-white"
              }`}
            >
              <ClipboardCopyIcon className="h-4 w-4 mr-1" />
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
