import { combineReducers } from "redux";
import { booksReducer } from "../features/books/booksSlice";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
