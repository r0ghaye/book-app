import { useState } from "react";

import BookCard from "./BookCard/BookCard";
import SideCard from "./SideCard/SideCard";
import SearchBox from "./SearchBox/SearchBox";

import { books as bookData } from "@/constants/mockData";

import { twMerge } from "tailwind-merge";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState(bookData);

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  const likedListHandler = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className="grid grid-cols-4 mt-12">
        <div
          className={twMerge(
            " grid gap-3",
            !!liked.length ? "col-span-3" : "col-span-4"
          )}
        >
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              likedListHandler={likedListHandler}
            />
          ))}
        </div>
        <div>
          {!!liked.length && (
            <div className="col-span-1 bg-indigo-500 grid gap-2 p-3 ml-5 rounded-lg">
              <h3 className="text-xl py-1">Favorites</h3>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
