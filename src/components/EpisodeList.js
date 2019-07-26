import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then(res => {
      // setepisode(res.data.results);
      const episode = res.data.results;
      setEpisode(episode);
      //   console.log(episode);
    });
  }, []);

  return (
    <section className="">
      {episode.map(episode => (
        <EpisodeCard
          key={episode.id}
          name={episode.name}
          airDate={episode.air_date}
          episode={episode.episode}
          characters={episode.characters}
        />
      ))}
    </section>
  );
}
