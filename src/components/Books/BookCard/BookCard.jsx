import * as Icons from "@/assets/icons";

function BookCard({ data: { image, author, language, title } }) {
  return (
    <div className="bg-amber-600 flex justify-between items-start p-4 rounded-lg">
      <div className="flex">
        <img src={image} />

        <div >
          <h3>{title}</h3>

          <p>{author}</p>

          <div>
            <span>{language}</span>
            <span>{}</span>
          </div>
        </div>
      </div>

      <button>
        <Icons.LikeIcon />
      </button>
    </div>
  );
}

export default BookCard;
