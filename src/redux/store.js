import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { InputValue, OpenModal, CurrentField } from "./reducers";

const reducers = combineReducers({
  InputValue: InputValue,
  OpenModal: OpenModal,
  CurrentField: CurrentField
});

//store
const store = createStore(reducers, applyMiddleware(logger));

export { store };
