import React from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

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
    dispatch({
      type: "DELETE_SUBCAT",
      id: e.currentTarget.id
    });
  };

  const handleMouseUp = e => {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        value: true,
        whoOpened: "sub"
      }
    });
    dispatch({
      type: "CURRENT_FIELD",
      fieldid: e.currentTarget.dataset.fieldid
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
              <div className="list" key={shortid.generate()}>
                <div className="list__element">
                  <p>{e.category}</p>
                  <button
                    className="multiple-input-field__button"
                    id={e.id}
                    onMouseDown={handleMouseDown}
                  >
                    <span className="multiple-input-field__button-minus"></span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="multiple-input-field_add-btn"
          data-fieldid={id}
          onMouseUp={handleMouseUp}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default MultipleInputField;
