import { useArt } from "../hooks/useArt";
import { Card } from "./Card";

export const Paintings = () => {
  const { paintings } = useArt();
  return (
    <div className="h-screen w-full flex flex-col p-16 gap-8">
      <div className=" text-white flex flex-col">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          Stolen Art
        </h1>
        <h2>Paintings</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {paintings.map((painting) => {
          return (
            <Card
              key={painting.title}
              title={painting.title}
              maker={painting.maker}
              period={painting.period}
              imgUrl={painting.images[0].original}
              description={painting.description}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
