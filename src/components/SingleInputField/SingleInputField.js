import React from "react";
import { useDispatch } from "react-redux";

const SingleInputField = props => {
  const dispatch = useDispatch();
  const { value, id } = props.data;

  const handleClick = e => {
    dispatch({
      type: "DELETE_VALUE",
      id: e.currentTarget.id
    });
  };

  return (
    <div className="single-input-field">
      <span className="single-input-field__bar">
        <p className="single-input-field__text">{value}</p>
        <button
          className="single-input-field__button"
          id={id}
          onClick={handleClick}
        >
          <span className="single-input-field__button-minus"></span>
        </button>
      </span>
    </div>
  );
};

export default SingleInputField;
