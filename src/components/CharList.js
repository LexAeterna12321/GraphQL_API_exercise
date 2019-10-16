import React from "react";
import CharCard from "./CharCard";

function CharList({ data }) {
  const { characters } = data;
  console.log(data);
  return (
    <ul className="container">
      <div className="row">
        {characters.results.map(char => {
          console.log(char);
          return <CharCard key={char.id} {...char} />;
        })}
      </div>
    </ul>
  );
}

export default CharList;
