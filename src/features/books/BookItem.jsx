import { useSelector } from "react-redux";
import { selectBookById } from "./booksSlice";

export const BookItem = ({ id }) => {
  const bookItem = useSelector((state) => selectBookById(state, id));
  const path = () => {
    if (bookItem.volumeInfo.imageLinks)
      return bookItem.volumeInfo.imageLinks.thumbnail;
    return "https://memegenerator.net/img/instances/72838539.jpg";
  };
  return (
    <div>
      <a
        href={bookItem.volumeInfo.previewLink}
        className="bookItem"
        key={bookItem.id}
      >
        <img src={path()} alt={bookItem.title} />
      </a>
    </div>
  );
};
