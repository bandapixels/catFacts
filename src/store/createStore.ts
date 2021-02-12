import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catReducer from "../catFact/cat.reducer";

const store = createStore(catReducer, applyMiddleware(thunk));

export default store;
