import { useArt } from "../hooks/useArt";
import { Card } from "./Card";

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
            <Card
              key={book.title}
              title={book.title}
              maker={book.maker}
              period={book.period}
              imgUrl={book.images[0].original}
              description={book.description}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
