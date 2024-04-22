import { useEffect, useState } from "react";

export const useFugitives = (url) => {
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
