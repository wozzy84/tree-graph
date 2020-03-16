function InputValue(state = [], action) {
  switch (action.type) {
    case "INPUT_VALUE":
      return [
        ...state,
        {
          value: action
        }
      ];
    case "DELETE_VALUE":
      const filteredCollection = state.filter(
        data => data.value.id !== action.id
      );

      return filteredCollection;
    default:
      return state;
  }
}

function OpenModal(state = false, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.value;
    default:
      return state;
  }
}

export { InputValue, OpenModal };
