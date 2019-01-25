import { createStore, applyMiddleware, combineReducers } from "redux";

import sample from "./createVote";

const reducer = combineReducers({
  sample
});

export default reducer;
