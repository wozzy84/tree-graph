import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import shortid from 'shortid'

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};


Modal.setAppElement("#root");

const Popup = () => {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector(state => state.OpenModal);
  const [localInput, setLocalInput] = useState("");

  let subtitle;

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    dispatch({
      type: "INPUT_VALUE",
      value: localInput,
      id: shortid.generate()
      
    });
    dispatch({
      type: "OPEN_MODAL",
      value: false
    });

    setLocalInput("");
  };

  const handleChange = e => {
    setLocalInput(e.currentTarget.value);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form onSubmit={closeModal}>
          <input value={localInput} onChange={handleChange} />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default Popup;
