import React from "react";
import SingleInputField from "../SingleInputField/SingleInputField";
import { useState } from "react";
import Popup from "../Popup/Popup";


const Container = () => {
  const [newElement, setNewElement] = useState([1]);
  const handleClick = () => {
    let value;
    setNewElement((value = [...newElement, 1]));
  };

  return (
    <div className="container">
      <div className="main-frame">
        <div className="main-frame__people" type="button">
          People
        </div>
        <div className="inputs-container">
          {newElement.map(() => {
            return <SingleInputField/>;
          })}
        </div>
        <button
          className="main-frame__add-btn"
          type="button"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <Popup/>
    </div>
  );
};

export default Container;
