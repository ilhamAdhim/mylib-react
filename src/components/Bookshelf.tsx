import { Booktype } from "@/types/book";
import BookItem from "./BookItem";

interface IBookshelf {
  category: "bookFinished" | "bookList";
  books: Booktype[];
  setDataBooks: (prev: any) => void;
  setActiveModal: (prev: any) => void;
  handleOpen: () => void;
}

function Bookshelf({
  category,
  books,
  setDataBooks,
  setActiveModal,
  handleOpen,
}: IBookshelf) {
  const displayModalAddBook = () => {
    console.log("Book added");
    setActiveModal("add");
    handleOpen();
  };

  const displayModalClearFinished = () => {
    console.log("Book clear");
    setActiveModal("remove");
    handleOpen();
  };

  const handleMoveBookshelf = (target: string, id: number) => {
    setDataBooks((prev: Booktype[]) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, isCompleted: target === "bookList" ? false : true }
          : book
      )
    );
  };

  const handleDeleteBook = (id: number) => {
    setDataBooks((prev: Booktype[]) => prev.filter((item) => item.id !== id));
  };

  return (
    <div id="card_bookshelves">
      <div className="card_bookshelves_header">
        <div className="book_category">
          {category === "bookFinished" ? "Finished" : "Book List"}
        </div>
        <button
          id="button_clear_finished"
          className={
            category === "bookFinished"
              ? "button_card_header"
              : "button_card_header_clear"
          }
          onClick={
            category === "bookFinished"
              ? () => displayModalClearFinished()
              : () => displayModalAddBook()
          }
        >
          <span>{category === "bookFinished" ? "Clear" : "Add Book"}</span>
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
              <BookItem
                key={book.id}
                {...book}
                handleDeleteBook={handleDeleteBook}
                handleMoveBookshelf={handleMoveBookshelf}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Bookshelf;
