import { useEffect, useState } from "react";

const url = "https://api.fbi.gov/wanted/v1/list";

export const useFugitives = () => {
  const [fugitives, setFugitives] = useState([]);

  useEffect(() => {
    const fetchFugitives = async () =>
      await fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setFugitives(json.items);
          console.log(json.items);
        });
    fetchFugitives();
  }, []);

  return { fugitives };
};
