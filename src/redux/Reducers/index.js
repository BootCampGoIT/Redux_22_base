import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    products: productsReducer
})

export default rootReducer;