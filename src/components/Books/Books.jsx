import { useState } from "react";

import BookCard from "./BookCard/BookCard";
import SideCard from "./SideCard/SideCard";

import { books } from "@/constants/mockData";

import { twMerge } from "tailwind-merge";

function Books() {
  const [liked, setLiked] = useState([]);

  const likedListHandler = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div className="grid grid-cols-4 mt-20">
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
            <h3 className="text-xl py-2">Favorites</h3>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
