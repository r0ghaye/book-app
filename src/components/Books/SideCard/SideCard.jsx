function SideCard({ data: { image, title } }) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-md bg-indigo-400">
      <img src={image} alt={title} className="w-[30px]" />

      <p className="text-base font-normal">{title}</p>
    </div>
  );
}

export default SideCard;
