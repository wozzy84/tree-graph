import { createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger"

import {
InputValue, OpenModal

} from "./reducers";


const reducers = combineReducers({
  InputValue: InputValue,
  OpenModal: OpenModal

 
});

//store
const store = createStore(reducers,  applyMiddleware(logger));

export { store };
