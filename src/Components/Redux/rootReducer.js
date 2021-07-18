import { combineReducers } from "redux";
import companyReducer from "./reducers/companyReducer";
// import studentReducer from "./reducers/studentReducers";



const rootReducer = combineReducers({
  company: companyReducer,
  // student: studentReducer,
});

export default rootReducer;
