import React, { useState } from "react";
import Character from "./Character";
import CharacterCard from "./CharacterCard";

function SearchChar(props) {
  const [searchChar, setSearchChar] = useState("");
  const [searchedCharContainer, setSearchedCharContainer] = useState("");
  const [randomChar, setRandomChar] = useState(
    props.data[Math.floor(Math.random() * props.data.length)]
  );
  const [showThisCharacter, setshowThisCharacter] = useState();

  const handleChange = (e) => {
    setSearchChar(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const character = searchChar;
    if (character !== "") {
      setSearchedCharContainer(character);
    }
    setSearchChar("");
  };

  const showRandom = (e) => {
    e.preventDefault();
    console.log("showing random");
    setRandomChar(Math.floor(Math.random() * props.data.length));
    setshowThisCharacter(props.data[randomChar]);
    if (showThisCharacter === undefined) {
      setshowThisCharacter(props.data[0]);
    }
  };

  console.log(showThisCharacter);

  return (
    <div>
      <form className="search-char">
        <input
          placeholder="Find the Baddest of the Bad"
          onChange={handleChange}
          type="name"
          value={searchChar || ""}
        />
        <button onClick={handleClick}>Search</button>
        <button onClick={showRandom}>Random</button>
      </form>
      <CharacterCard
        data={props.data}
        character={searchedCharContainer}
        randomCharacter={showThisCharacter}
      />
    </div>
  );
}

export default SearchChar;
