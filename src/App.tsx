import "./styles/stylePage.css";
import "./styles/animation.css";
import "./styles/buttons.css";
import "./styles/modals.css";
import "./styles/bookItem.css";
import "./styles/form.css";

import Searchbar from "./components/Searchbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Booktype } from "./types/book";
import Bookshelf from "./components/Bookshelf";
import useDisclosure from "./hooks/useDisclosure";
import ModalAddBook from "./components/Modals/ModalAddBook";
import ModalValidation from "./components/Modals/ModalValidation";

function App() {
  const { isOpen, handleClose, handleOpen } = useDisclosure();
  const [dataBooks, setDataBooks] = useState<Booktype[]>([]);
  const [activeModal, setActiveModal] = useState<"add" | "remove" | "">("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState<Booktype[]>([]);

  const handleClearFinished = () => {
    setDataBooks((prev: Booktype[]) =>
      prev.filter((item) => !item.isCompleted)
    );
    handleClose();
  };

  const handleAddBook = (bookItem: Booktype) => {
    setDataBooks((prev) => [...prev, bookItem]);
    handleClose();
  };

  useEffect(() => {
    setDataBooks([
      {
        id: 1634376225400,
        title: "Harry Potter and the Philosopher's Stone",
        author: "Ilham Rowling",
        imageURL:
          "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg?h=375&resize=fit&w=250",
        year: "2000",
        isCompleted: true,
      },
      {
        id: 1634391145501,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        year: "2017",
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg",
        isCompleted: true,
      },
      {
        id: 1634391847252,
        title: "Atomic Habits",
        author: "James Clear",
        year: "2018",
        imageURL:
          "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/6/6/5105a9a3-3e95-4639-ba4e-b7ca91db8f4f.jpg",
        isCompleted: false,
      },
      {
        id: 1634392008893,
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        year: "1936",
        imageURL:
          "https://miro.medium.com/max/644/1*2jWzEpx7pPLD4hTiXrGroQ.jpeg",
        isCompleted: false,
      },
      {
        id: 1634392102756,
        title: "Future We Choose",
        author: "Christiana Figueres",
        year: "2020",
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/4135O-8cnmL._SX329_BO1,204,203,200_.jpg",
        isCompleted: true,
      },
      {
        id: 1634392125165,
        title: "Coba judul",
        author: "Saya sendiri",
        year: "2000",
        imageURL: "",
        isCompleted: false,
      },
    ]);
  }, []);

  return (
    <>
      <Jumbotron />
      <Searchbar
        dataBooks={dataBooks}
        setIsSearching={setIsSearching}
        setFilteredBooks={setFilteredBooks}
      />
      <section id="content">
        <Bookshelf
          category="bookList"
          books={(isSearching ? filteredBooks : dataBooks).filter(
            (item) => !item.isCompleted
          )}
          setDataBooks={setDataBooks}
          setActiveModal={setActiveModal}
          handleOpen={handleOpen}
        />
        <Bookshelf
          category="bookFinished"
          books={(isSearching ? filteredBooks : dataBooks).filter(
            (item) => item.isCompleted
          )}
          setDataBooks={setDataBooks}
          setActiveModal={setActiveModal}
          handleOpen={handleOpen}
        />
      </section>
      <br />
      {isOpen && activeModal === "add" && (
        <ModalAddBook onClose={handleClose} addBook={handleAddBook} />
      )}
      {isOpen && activeModal === "remove" && (
        <ModalValidation
          onClose={handleClose}
          removeList={handleClearFinished}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
