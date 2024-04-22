import { useArt } from "../hooks/useArt";
import { Card } from "./Card";

export const Guitars = () => {
  const { guitars } = useArt();
  return (
    <div className="h-screen w-full flex flex-col p-16 gap-8">
      <div className=" text-white flex flex-col">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          Stolen Art
        </h1>
        <h2>Guitars</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {guitars.map((guitar) => {
          return (
            <Card
              key={guitar.title}
              title={guitar.title}
              maker={guitar.maker}
              period={guitar.period}
              imgUrl={guitar.images[0].original}
              description={guitar.description}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
