import { useArt } from "../hooks/useArt";

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
    </div>
  );
};
