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
          category: "black"
        },
        {
          id:"zz1",
          category: "hispanic"
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
        return {...element, value: {...element.value, subCategories: element.value.subCategories.filter(e=>e.id!==action.id)}}
      })
      console.log(filteredData)

      return  filteredData
      default: return state
     
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
