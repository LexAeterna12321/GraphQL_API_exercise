import React from "react";

function CharCard({ name, species, image, status }) {
  return (
    <div className="col s12 m6 l4 ">
      <div className="card black-text">
        <div className="card-image">
          <img src={image} alt={`Rick and Morty Character: ${name}`} />
          <span className="card-title white-text text-darken-4">{name}</span>
        </div>
        <div className="card-content">
          <p>Species:{species}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </div>
  );
}

export default CharCard;
