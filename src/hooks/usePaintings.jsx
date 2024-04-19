import { useEffect, useState } from "react";

const url =
  "https://api.fbi.gov/@artcrimes?pageSize=50&page=1&sort_on=modified&sort_order=desc&crimeCategory=paintings";

export const usePaintings = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchPaintings = async () =>
      await fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setPaintings(json.items);
          console.log(json.items);
        });
    fetchPaintings();
  }, []);

  return { paintings };
};
