import {books} from "@/constants/mockData"

import BookCard from "./BookCard/BookCard"

function Books() {
  return (
    <div>
      <div className="grid gap-3 mt-20">
{books.map(book => (
  <BookCard key={book.id} data={book} />
))}
      </div>
      <div></div>
    </div>
  )
}

export default Books