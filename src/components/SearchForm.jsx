import React, { useRef } from "react";
import { DEFAULT_SEARCH_WORD } from "../constants";
import { useGlobalAppContext } from "../context";
import { useQueryClient } from "@tanstack/react-query";

const SearchForm = () => {
  const searchInput = useRef(DEFAULT_SEARCH_WORD);
  const { setSearchWord } = useGlobalAppContext();
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSearchWord = searchInput.current.value;
    if (newSearchWord === "") return;
    setSearchWord(newSearchWord);
  };

  return (
    <>
      <h1 className="title">Image Search App</h1>
      <section className="search-form">
        <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="search"
            placeholder={DEFAULT_SEARCH_WORD}
            className="form-input search-input"
            ref={searchInput}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default SearchForm;
