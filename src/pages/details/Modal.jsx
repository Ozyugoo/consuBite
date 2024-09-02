import { children } from "react";

function Modal({ isOpen, onClose, children}) {

if (!isOpen) return null;
  return (
    <div className="absolute inset-0 top-0 bg-custom-black bg-opacity-50 flex flex-wrap items-center justify-center ">
      <div className="bg-custom-white rounded-2xl shadow-lg w-[36rem] max-w-[40rem] px-8 mt-6 text-custom-black">
        {children}
      </div>
    </div>
  );
}

export default Modal

