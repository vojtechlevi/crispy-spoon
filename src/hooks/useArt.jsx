import { useEffect, useState } from "react";

const paintingsUrl =
  "https://api.fbi.gov/@artcrimes?pageSize=50&page=1&sort_on=modified&sort_order=desc&crimeCategory=paintings";
const booksUrl =
  "https://api.fbi.gov/@artcrimes?pageSize=50&page=1&sort_on=modified&sort_order=desc&crimeCategory=books";
const crucifixUrl =
  "https://api.fbi.gov/@artcrimes?pageSize=50&page=1&sort_on=modified&sort_order=desc&crimeCategory=crucifix";
const guitarsUrl =
  "https://api.fbi.gov/@artcrimes?pageSize=50&page=1&sort_on=modified&sort_order=desc&crimeCategory=guitars";

export const useArt = () => {
  const [paintings, setPaintings] = useState([]);
  const [books, setBooks] = useState([]);
  const [crucifix, setCrucifix] = useState([]);
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const fetchPaintings = async () =>
      await fetch(paintingsUrl)
        .then((response) => response.json())
        .then((json) => {
          setPaintings(json.items);
          console.log(json.items);
        });

    const fetchBooks = async () =>
      await fetch(booksUrl)
        .then((response) => response.json())
        .then((json) => {
          setBooks(json.items);
          console.log(json.items);
        });
    const fetchCrucifix = async () =>
      await fetch(crucifixUrl)
        .then((response) => response.json())
        .then((json) => {
          setCrucifix(json.items);
          console.log(json.items);
        });
    const fetchGuitars = async () =>
      await fetch(guitarsUrl)
        .then((response) => response.json())
        .then((json) => {
          setGuitars(json.items);
          console.log(json.items);
        });
    fetchPaintings();
    fetchBooks();
    fetchCrucifix();
    fetchGuitars();
  }, []);

  return { paintings, books, crucifix, guitars };
};
