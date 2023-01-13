// TODO:
// 2. need a way to track the players lives. Think an array with a boolean value, if length is greater than 6 then its game over.
// 3. check what the user has entered and compare it to the words array. If the user has entered the correct letter then make it visible. If its correct you find a match get the index of that item in the array and match it with the dom element. Then you can change the background color to white by giving it as a class name of visible.
// 4. Image of character is hidden in a grid. once a correct letter is given a block is shown.

import React from "react";
import "../App.css";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("https://rickandmortyapi.com/api/character").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const randomNumber = Math.floor(Math.random() * 20) + 1; // So 20 is the number of result we get back from the api request. its 20 per page.
  const word = data && data.results[randomNumber].name.split(""); // This splits everything into an array including the spaces.

  // console.log("🚀 ~ file: Main.js:31 ~ Main ~ randomNumber", randomNumber);
  // if (data) {
  //   console.log("🚀 ~ ", word);
  // }

  const handleInput = (e) => {
    console.log("🚀 ~ file: Main.js:37 ~ Main ~ e.target.value", e.target.value);
  };

  return (
    <div>
      <p>Main</p>
      <div>
        <p>{data.results[randomNumber].name}</p>
        <img src={data.results[randomNumber].image} alt={data.results[randomNumber].name} />
      </div>
      <div>
        {word &&
          word.map((item, index) => (
            <big key={index}>
              {item === " " ? (
                <span className={`index-${index}`}>_</span>
              ) : (
                <span className={`hidden-letter-block index-${index}`}>
                  <sub className={`hidden-text ${index}`}>{item}</sub>
                </span>
              )}
            </big>
          ))}
      </div>
      <label>Enter a letter:</label>
      <input type="text" onChange={(e) => handleInput(e)} />
    </div>
  );
};

export default Main;
