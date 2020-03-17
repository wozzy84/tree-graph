const initValue = [
  {
    value: {
      type: "INPUT_VALUE",
      value: "Age 45+",
      id: "001",
      singleInput: true,
      subCategories: []
    }
  },
  {
    value: {
      type: "INPUT_VALUE",
      value: "Ethnicity",
      id: "002",
      singleInput: false,
      subCategories: [
        {
          id: "xyz",
          category: "Black",
          parentId: "002"
        },
        {
          id: "zz1",
          category: "Hispanic",
          parentId: "002"
        }
      ]
    }
  },
  {
    value: {
      type: "INPUT_VALUE",
      value: "Income yearly 45k USD+",
      id: "003",
      singleInput: true,
      subCategories: []
    }
  }
];

function InputValue(state = initValue, action) {
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
    case "DELETE_SUBCAT":
      const filteredData = state.map(element => {
        return {
          ...element,
          value: {
            ...element.value,
            subCategories: element.value.subCategories.filter(
              e => e.id !== action.id
            )
          }
        };
      });
      return filteredData;
    case "SUB_VALUE":
      const filtered = state.map(element => {
        if (element.id === action.parentId) {
          return {
            ...element,
            value: {
              ...element.value,
              subCategories: [...element.value.subCategories, action.payload]
            }
          };
        } else return element;
      });
      return filtered;
    default:
      return state;
  }
}

function OpenModal(state = false, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.payload;
    default:
      return state;
  }
}

function CurrentField(state = null, action) {
  switch (action.type) {
    case "CURRENT_FIELD":
      return action.fieldid;
    default:
      return state;
  }
}
export { InputValue, OpenModal, CurrentField };
