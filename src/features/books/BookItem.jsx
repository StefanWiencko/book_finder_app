import { useSelector } from "react-redux";
import { selectBookById } from "./booksSlice";

export const BookItem = ({ id }) => {
  const bookItem = useSelector((state) => selectBookById(state, id));
  return (
    <div>
      <a
        href={bookItem.volumeInfo.previewLink}
        className="bookItem"
        key={bookItem.id}
      >
        <img src={bookItem.volumeInfo.imageLinks.thumbnail} alt="" />
      </a>
    </div>
  );
};
