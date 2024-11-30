import * as Icons from "@/assets/icons";
import { useState } from "react";

function SearchBox({ search, setSearch, searchHandler }) {
  console.log(search);
  return (
    <div className="mt-20 flex items-center gap-4">
      <input
        type="text"
        placeholder="Search Book"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLocaleLowerCase())}
        className="text-gray-800 outline-none rounded-md w-[300px] h-[40px] px-2"
      />

      <button
        onClick={searchHandler}
        className="bg-indigo-500 rounded-md w-[40px] h-[40px] justify-center items-center flex"
      >
        <Icons.SearchIcon fontSize="1.2rem" />
      </button>
    </div>
  );
}

export default SearchBox;
