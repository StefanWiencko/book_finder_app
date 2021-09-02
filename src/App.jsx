import React, { useState } from "react";
import { BookItem } from "./features/books/BookItem";
import { fetchBooks, selectBooksIds } from "./features/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const booksIds = useSelector(selectBooksIds);
  const changeHandler = (event) => {
    setInputVal(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(fetchBooks(inputVal));
    setInputVal("");
  };
  const BooksList = booksIds.map((bookId) => (
    <BookItem key={bookId} id={bookId} />
  ));
  console.log(booksIds);
  return (
    <div className="App">
      <h3>Book find app</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for your book"
          onChange={changeHandler}
        />
        <input type="submit" value="Search" />
        {BooksList}
      </form>
    </div>
  );
}

export default App;
