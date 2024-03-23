import React from "react";
// import "./Modal.css";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        {children}
        <button className="close-modal" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
