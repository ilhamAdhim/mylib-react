import { Booktype } from "../types/book";
import BookItem from "./BookItem";

interface IBookshelf {
  category: "bookFinished" | "bookList";
  books: Booktype[];
  setDataBooks: (item: any) => void;
}

function Bookshelf({ category, books, setDataBooks }: IBookshelf) {
  return (
    <div id="card_bookshelves">
      <div className="card_bookshelves_header">
        <div className="book_category">
          {category === "bookFinished" ? "Finished" : ""}
        </div>
        <button
          className={
            category === "bookFinished"
              ? "button_card_header"
              : "button_card_header_clear"
          }
          id="button_clear_finished"
        >
          <span>Clear</span>
        </button>
      </div>
      <div
        id={category === "bookFinished" ? "finished_book_list" : "book_list"}
      >
        {books.length === 0 ? (
          "Data Kosong"
        ) : (
          <>
            {books.map((book) => (
              <BookItem {...book} setDataBooks={setDataBooks} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Bookshelf;
