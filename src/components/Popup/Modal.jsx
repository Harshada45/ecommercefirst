import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onCloseModal, closeButton = true }) => {
  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {closeButton && (
          <button className="modal-close" onClick={onCloseModal}>
            <IoClose />
          </button>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
