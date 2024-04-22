import { useArt } from "../hooks/useArt";

export const Books = () => {
  const { books } = useArt();
  return (
    <div className="h-screen w-full flex flex-col p-16 gap-8">
      <div className=" text-white flex flex-col">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          Stolen Art
        </h1>
        <h2>Books</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {books.map((book) => {
          return (
            <div
              key={book.title}
              className="text-white w-1/4 flex flex-col gap-4 bg-white bg-opacity-20 rounded-lg p-4"
            >
              <div>
                <h2>{book.title}</h2>
                <p>{book.maker}</p>
                <p>{book.period}</p>
              </div>
              <img
                style={{ maxWidth: "150px" }}
                src={book.images[0].original}
                alt=""
              />
              <p>{book.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
