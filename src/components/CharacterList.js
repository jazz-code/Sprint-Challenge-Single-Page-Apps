import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList({ props }) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      // setCharacters(res.data.results);
      const characters = res.data.results;
      setCharacters(characters);
      console.log(characters);
    });

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          origin={character.origin.name}
          species={character.species}
          location={character.location.name}
          image={character.image}
          episode={character.episode}
        />
      ))}
    </section>
  );
}
