import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h4>Modal Content</h4>
      </div>
    </div>
  );
};
export default Modal;
