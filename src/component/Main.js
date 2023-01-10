import React from "react";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("https://rickandmortyapi.com/api/character").then((res) => res.json()),
  });
  if (data) {
    console.log("🚀 ~ file: Main.js:9 ~ Main ~ data", data.results);
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const randomNumber = Math.floor(Math.random() * 20) + 1;

  return (
    <div>
      <p>Main</p>
      <div key={data.results[randomNumber].id}>
        <p>{data.results[randomNumber].name}</p>
        <img src={data.results[randomNumber].image} alt={data.results[randomNumber].name} />
      </div>

      {/* {data &&
        data.results.map((item, index) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
          </div>
        ))} */}
    </div>
  );
};

export default Main;
