import { useState } from "react";

import * as Icons from "@/assets/icons";

function BookCard({ data, likedListHandler }) {
  const { image, author, language, title, pages } = data
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    likedListHandler(data, isLike)
    setIsLike(isLike => !isLike)
  }

  return (
    <div className="bg-zinc-700 flex justify-between items-start p-4 rounded-lg">
      <div className="flex gap-6">
        <img src={image} className="w-[60px] rounded" />

        <div className="flex flex-col justify-between ">
          <h3 className="font-black text-xl">{title}</h3>
          <p className="font-medium text-base">{author}</p>
          <div className="flex gap-4 text-sm font-thin">
            <span>{language}</span>
            <span>{pages}pages</span>
          </div>
        </div>
      </div>

      <button
        onClick={likeHandler}
        className="h-fit transition-all duration-100 ease-in-out hover:scale-125"
      >
        <Icons.LikeIcon
          className={isLike ? "text-red-600" : "text-white"}
          fontSize="1.8rem"
        />
      </button>
    </div>
  );
}

export default BookCard;
