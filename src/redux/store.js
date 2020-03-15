import { createStore, combineReducers} from "redux";

import {
  loggedUser,

} from "./reducers";


const reducers = combineReducers({
  loggedUser: loggedUser,
 
});

//store
const store = createStore(reducers);

export { store };
