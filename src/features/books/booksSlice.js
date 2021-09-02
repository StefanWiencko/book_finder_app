import axios from "axios";
import { createSelector } from "reselect";
const initialState = {
  status: "idle",
  entities: {},
};
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "books/booksLoading":
      return { ...state, status: "loading" };
    case "books/booksLoaded": {
      const newEntities = {};
      action.payload.data.items.forEach((book) => {
        newEntities[book.id] = book;
      });
      return {
        ...state,
        status: "idle",
        entities: newEntities,
      };
    }
    default:
      return state;
  }
};

export const booksLoading = () => ({
  type: "books/booksLoading",
});
export const booksLoaded = (data) => ({
  type: "books/booksLoaded",
  payload: data,
});
export const fetchBooks = (searchQuery) => async (dispatch) => {
  const apiKey = "enter your google cloud api key here";
  const URI = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=40`;
  console.log(URI);
  dispatch(booksLoading());
  const response = await axios.get(URI);
  dispatch(booksLoaded(response));
};

const selectBooksEntities = (state) => state.books.entities;
export const selectBooks = createSelector(selectBooksEntities, (entities) =>
  Object.values(entities)
);
export const selectBooksIds = createSelector(selectBooks, (books) =>
  books.map((book) => book.id)
);
export const selectBookById = (state, bookId) => {
  return selectBooksEntities(state)[bookId];
};
