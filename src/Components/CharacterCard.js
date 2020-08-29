import React from "react";

function CharacterCard(props) {
  const randomCharacter = { ...props.randomCharacter };

  const searchedChar = props.data.map((character) => {
    if (props.character === character.name || props.character === character.nickname) {
      return (
        <div className="card" key={character.char_id}>
          <div>
            <h1>{character.name}</h1>
            <img className="character-card-img" src={character.img} alt={character.name} />
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="all-cards">
        <div className="card" key={randomCharacter.char_id}>
          <div>
            <h1>{randomCharacter.name}</h1>
            <img
              className="character-card-img"
              src={randomCharacter.img}
              alt={randomCharacter.name}
            />
          </div>
        </div>
        {searchedChar}
      </div>
    </div>
  );
}

export default CharacterCard;
