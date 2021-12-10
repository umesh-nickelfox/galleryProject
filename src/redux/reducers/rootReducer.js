import { combineReducers } from "redux";
import counter from "./counters";
const AllReducer = {
    counter,
};

const rootReducer = combineReducers(AllReducer);
export default rootReducer;
