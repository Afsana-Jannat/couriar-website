import React from "react";

const MyModal = ({ children }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        {children}
      </dialog>
    </div>
  );
};

export default MyModal;
