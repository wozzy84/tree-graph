import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import shortid from "shortid";

const modalStyle = {
  content: {
    display: "flex",
    justifyContent: "center",
    width: "400px",
    height: "200px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "8px",
    background: "linear-gradient(#a376f4, #7176f7)",
    boxShadow: "2px 3px 7px 1px rgba(0, 0, 0, 0.22)"
  }
};

Modal.setAppElement("#root");

const Popup = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(state => state.OpenModal.value);
  const whoOpened = useSelector(state => state.OpenModal.whoOpened);
  const parentId = useSelector(state => state.CurrentField);
  const [localInput, setLocalInput] = useState("");

  const closeModal = () => {
    if (whoOpened === "main" && localInput.length) {
      dispatch({
        type: "INPUT_VALUE",
        value: localInput,
        id: shortid.generate(),
        singleInput: true,
        subCategories: []
      });
    } else if (whoOpened === "sub" && localInput.length) {
      dispatch({
        type: "SUB_VALUE",
        payload: {
          id: shortid.generate(),
          category: localInput,
          parentId: parentId
        }
      });
    }

    dispatch({
      type: "OPEN_MODAL",
      payload: {
        value: false,
        whoOpened: ""
      }
    });
    setLocalInput("");
  };

  const handleChange = e => {
    setLocalInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation()
    closeModal(); 
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <div className="modal__container">
          <button className="modal__button"  type="submit" onClick={closeModal}>
            +
          </button>
          <div className="modal__text">Type something below...</div>
          <form onSubmit={handleSubmit}>
            <input
              className="modal__input"
              value={localInput}
              onChange={handleChange}
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
