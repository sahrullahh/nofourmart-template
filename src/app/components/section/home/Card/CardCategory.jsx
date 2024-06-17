export default function CardCategory({ title, images }) {
  return (
    <div className="bg-neutral-100/70 p-5 pt-14 pb-14 w-full rounded-md space-y-5">
      <img
        src={images}
        className="max-w-[100px] w-full  mx-auto"
        alt="title"
      />
      <p className="text-center font-medium text-lg tracking-tighter">
        {title}
      </p>
    </div>
  );
}
