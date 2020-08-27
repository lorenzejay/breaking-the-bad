import React from "react";

function Character(props) {
  const character = props.character.map((item) => {
    return (
      <div className="card">
        <h1 key={item.key}>{item.char}</h1>;
      </div>
    );
  });
  return <div className="all-cards">{character}</div>;
}

export default Character;
