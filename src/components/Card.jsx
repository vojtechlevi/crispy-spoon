export const Card = ({ title, maker, period, imgUrl, description }) => {
  return (
    <div
      key={title}
      className="text-white w-1/4 flex flex-col gap-4 bg-white bg-opacity-20 rounded-lg p-4"
    >
      <div>
        <h2>{title}</h2>
        <p>{maker}</p>
        <p>{period}</p>
      </div>
      <img style={{ maxWidth: "150px" }} src={imgUrl} alt="" />
      <p>{description}</p>
    </div>
  );
};
