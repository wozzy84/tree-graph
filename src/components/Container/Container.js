import React from "react";
import SingleInputField from "../SingleInputField/SingleInputField";
import MultipleInputuField from "../MultipleInputField/MultipleInputField";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.InputValue);

  const handleClick = () => {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        value: true,
        whoOpened: "main"
      }
    });
    dispatch({
      type: "CURRENT_FIELD",
      fieldid: null
    });
  };

  return (
    <div className="container">
      <div className="main-frame">
        <div className="main-frame__people" type="button">
          People
        </div>
        <div className="inputs-container">
          {collection.map(e => {
            if (e.value.singleInput === true) {
              return <SingleInputField key={e.value.id} data={e.value} />;
            }
            return <MultipleInputuField key={e.value.id} data={e.value} />;
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
      <Popup />
    </div>
  );
};

export default Container;
