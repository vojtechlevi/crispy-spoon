import { useArt } from "../hooks/useArt";
import { Card } from "./Card";

export const Crucifix = () => {
  const { crucifix } = useArt();
  return (
    <div className="h-screen w-full flex flex-col p-16 gap-8">
      <div className=" text-white flex flex-col">
        <h1 className="text-lg md:text-2xl xl:text-4xl font-extrabold">
          Stolen Art
        </h1>
        <h2>Crucifix</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {crucifix.map((crucifix) => {
          return (
            <Card
              key={crucifix.title}
              title={crucifix.title}
              maker={crucifix.maker}
              period={crucifix.period}
              imgUrl={crucifix.images[0].original}
              description={crucifix.description}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
