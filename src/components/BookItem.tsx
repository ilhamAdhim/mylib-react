import { Booktype } from "@/types/book";
import { FaTrashAlt, FaUndo } from "react-icons/fa";

interface manageBookType {
  handleDeleteBook: (idBook: number) => void;
  handleMoveBookshelf: (target: string, idBook: number) => void;
}

function BookItem(props: manageBookType & Booktype) {
  const {
    author,
    year,
    id,
    title,
    isCompleted,
    imageURL,
    handleDeleteBook,
    handleMoveBookshelf,
  } = props;

  return (
    <div className="card_book">
      <img
        className="book_image"
        src={imageURL || "./assets/book_img_default.svg"}
      />
      <div className="book_title">{title}</div>
      <div className="book_details">
        <div className="book_author">By {author}</div>
        <div className="book_year">{year}</div>
      </div>
      <div className="book_actions">
        <button className="btn_delete" onClick={() => handleDeleteBook(id)}>
          <FaTrashAlt />
        </button>
        <button
          className="btn_done"
          onClick={
            isCompleted
              ? () => handleMoveBookshelf("bookList", id)
              : () => handleMoveBookshelf("finishedBooklist", id)
          }
        >
          {!isCompleted ? "✔" : <FaUndo />}
        </button>
      </div>
    </div>
  );
}

export default BookItem;
