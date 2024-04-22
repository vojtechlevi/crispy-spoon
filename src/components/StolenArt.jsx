import { useArt } from "../hooks/useArt";

export const StolenArt = () => {
  const { paintings, books, crucifix, guitars } = useArt();
  return (
    <div className="h-screen w-full flex flex-col p-16 gap-8">
      <div className=" text-white flex flex-wrap">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          Stolen Art
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {paintings.map((painting) => {
          return (
            <div
              key={painting.title}
              className="text-white w-1/4 flex flex-col gap-4 bg-white bg-opacity-20 rounded-lg p-4"
            >
              <div>
                <h2>{painting.title}</h2>
                <p>{painting.maker}</p>
                <p>{painting.period}</p>
              </div>
              <img
                style={{ maxWidth: "150px" }}
                src={painting.images[0].original}
                alt=""
              />
              <p>{painting.description}</p>
            </div>
          );
        })}
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
      <div className="flex flex-wrap gap-4">
        {crucifix.map((crucifix) => {
          return (
            <div
              key={crucifix.title}
              className="text-white w-1/4 flex flex-col gap-4 bg-white bg-opacity-20 rounded-lg p-4"
            >
              <div>
                <h2>{crucifix.title}</h2>
                <p>{crucifix.maker}</p>
                <p>{crucifix.period}</p>
              </div>
              <img
                style={{ maxWidth: "150px" }}
                src={crucifix.images[0].original}
                alt=""
              />
              <p>{crucifix.description}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        {guitars.map((guitar) => {
          return (
            <div
              key={guitar.title}
              className="text-white w-1/4 flex flex-col gap-4 bg-white bg-opacity-20 rounded-lg p-4"
            >
              <div>
                <h2>{guitar.title}</h2>
                <p>{guitar.maker}</p>
                <p>{guitar.period}</p>
              </div>
              <img
                style={{ maxWidth: "150px" }}
                src={guitar.images[0].original}
                alt=""
              />
              <p>{guitar.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
