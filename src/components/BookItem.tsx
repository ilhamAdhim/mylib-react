import { FaTrashAlt, FaUndo } from "react-icons/fa";
import { Booktype } from "../types/book";

interface manageBookType {
  setDataBooks: (item: any) => void;
}

function BookItem(props: manageBookType & Booktype) {
  const { author, id, year, title, isCompleted, imageURL, setDataBooks } =
    props;

  const handleDeleteBooks = () => {
    console.log("delete book");
  };

  const handleMove = (target: string) => {
    console.log("move book to", target);
  };

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
        <button className="btn_delete" onClick={handleDeleteBooks}>
          <FaTrashAlt />
        </button>
        <button
          className="btn_done"
          onClick={
            isCompleted
              ? () => handleMove("bookList")
              : () => handleMove("finishedBooklist")
          }
        >
          {!isCompleted ? "✔" : <FaUndo />}
        </button>
      </div>
    </div>
  );
}

export default BookItem;
