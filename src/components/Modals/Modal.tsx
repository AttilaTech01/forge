import ReactDOM from "react-dom";
import { useEffect, ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  actionBar: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

function Modal({ actionBar, children, onClose }: ModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="modal-action-bar">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-placeholder") as Element
  );
}

export default Modal;
