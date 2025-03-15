import "./Modal.css";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  modal: boolean;
  handleModal: (modal: boolean) => void;
}

const Modal = ({ children, modal, handleModal }: ModalProps) => {
  const toggleModal = () => {
    handleModal(!modal);
  };
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">{children}</div>

          <button onClick={toggleModal}>CLOSE</button>
        </div>
      )}
    </>
  );
};

export default Modal;
