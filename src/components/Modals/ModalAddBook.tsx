import { useState } from "react";
import { Booktype } from "../../types/book";

interface IModalAddBookProps {
  onClose: () => void;
  addBook: (bookItem: Booktype) => void;
}

function ModalAddBook({ onClose, addBook }: IModalAddBookProps) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <>
      <div id="modal_form" className="modal">
        <div className="modal_content">
          <div className="modal_header">
            <span>
              Add Book to <u> Book List </u>
            </span>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal_body">
            <div className="form_content">
              <form id="form_new_book" autoComplete="off">
                <div className="form_element">
                  <label className="required">Book Title</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text"
                    name=""
                  />
                  <span className="separator"> </span>
                  <span className="validatorTitle"> </span>
                </div>
                <div className="form_element">
                  <label className="required">Author Name</label>
                  <input
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    type="text"
                    name=""
                  />
                  <span className="separator"> </span>
                  <span className="validatorAuthor"> </span>
                </div>
                <div className="form_element">
                  <label className="required">Year</label>
                  <input
                    onChange={(e) => setYear(e.target.value)}
                    required
                    type="number"
                    name=""
                  />
                  <span className="separator"> </span>
                  <span className="validatorYear"> </span>
                </div>
                <div className="form_element">
                  <label>Image URL</label>
                  <input
                    onChange={(e) => setImageURL(e.target.value)}
                    type="text"
                    name=""
                  />
                  <span className="separator"> </span>
                </div>
              </form>
            </div>
          </div>
          <div className="modal_footer">
            <button
              onClick={() =>
                addBook({
                  year,
                  author,
                  imageURL,
                  isCompleted: false,
                  title: name,
                  id: +new Date(),
                })
              }
              className="submit_add_book"
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddBook;
