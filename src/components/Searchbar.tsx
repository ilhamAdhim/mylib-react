import { ChangeEvent, useState } from "react";
import { Booktype } from "../types/book";
import { FaSearch } from "react-icons/fa";

interface ISearchBar {
  dataBooks: Booktype[];
  setFilteredBooks: (prev: any) => void;
  setIsSearching: (prev: boolean) => void;
}

function Searchbar({
  dataBooks,
  setFilteredBooks,
  setIsSearching,
}: ISearchBar) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = () => {
    setIsSearching(true);
    setFilteredBooks(
      dataBooks.filter((book) =>
        book.title.toLowerCase().includes(inputSearch.toLowerCase())
      )
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
    if (e.target.value === "") setIsSearching(false);
  };

  const handleSearchByEnter = (e: any) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div id="search_section">
      <input
        type="text"
        id="search_input"
        className="search_input"
        placeholder="Search books . . ."
        onChange={handleChange}
        onKeyPress={handleSearchByEnter}
      />
      <button id="btn_search" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Searchbar;
