import { useArt } from "../hooks/useArt";

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
    </div>
  );
};
