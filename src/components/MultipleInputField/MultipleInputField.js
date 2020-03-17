import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MultipleInputField = props => {
  const dispatch = useDispatch();
  const { value, id, subCategories } = props.data;

  const handleClick = e => {
    dispatch({
      type: "DELETE_VALUE",
      id: e.currentTarget.id
    });
  };


  const handleMouseDown = e => {
      console.log("id", e.currentTarget.id)
    dispatch({
      type: "DELETE_SUBCAT",
      id: e.currentTarget.id

    });
  };
  return (
    <div className="multiple-input-field">
      <span className="multiple-input-field__bar">
        <div className="multiple-input-field__header">
          <p className="multiple-input-field__text">{value}</p>
          <button
            className="multiple-input-field__button"
            id={id}
            onClick={handleClick}
          >
            <span className="multiple-input-field__button-minus"></span>
          </button>
        </div>
        <div className="list-container">
          {subCategories.map(e => {
            return (
                <div className="list">
                <p className="list__element">{e.category}</p>
                <button
            className="multiple-input-field__button"
            id={e.id}
            onMouseDown={handleMouseDown}
          >
            <span className="multiple-input-field__button-minus"></span>
          </button>
                </div>
            );
          })}
        </div>
      </span>
    </div>
  );
};

export default MultipleInputField;
