import React from "react";

export default function Modal(props) {
  return (
    <div className="modal-overlay" onClick={() => props.closeModal()}>
      <div className="modal">
        <span className="close" onClick={() => props.closeModal()}>
          &times;
        </span>
        <img
          src={props.imageUrl}
          alt="Image agrandie"
          className="modal-image"
        />
      </div>
    </div>
  );
}
