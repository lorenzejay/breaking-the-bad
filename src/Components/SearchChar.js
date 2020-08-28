import React, { useState } from "react";
import Character from "./Character";

function SearchChar() {
  const [searchChar, setSearchChar] = useState({ char: "", key: "" });
  const [searchedCharContainer, setSearchedCharContainer] = useState([]);

  const handleChange = (e) => {
    setSearchChar({ ...searchChar, char: e.target.value, key: Date.now() });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const character = searchChar;
    if (character !== "") {
      setSearchedCharContainer([...searchedCharContainer, character]);
    }
    setSearchChar({ char: "", key: "" });
  };

  console.log(searchChar);
  console.log(searchedCharContainer);

  return (
    <div>
      <form className="search-char">
        <input
          placeholder="Find the Baddest of the Bad"
          onChange={handleChange}
          type="name"
          value={searchChar.char}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <Character character={searchedCharContainer} />
    </div>
  );
}

export default SearchChar;
