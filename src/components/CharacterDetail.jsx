import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";

export default function CharacterDetail({
  selectedId,
  onAddToFavourites,
  isAddToFavourite,
}) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);
        const episodesId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodesData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodesData].flat().slice(0, 5));
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedId) fetchData();
  }, [selectedId]);

  if (isLoading) {
    return (
      <div style={{ flex: "1", color: "var(--slate-300)" }}>
        <Loader />
      </div>
    );
  }

  if (!character || !selectedId) {
    return (
      <div style={{ flex: "1", color: "var(--slate-300)" }}>
        Please select a character...
      </div>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      <CharacterSubInfo
        character={character}
        isAddToFavourite={isAddToFavourite}
        onAddToFavourites={onAddToFavourites}
      />
      <CharacterEpisodes episodes={episodes} />
    </div>
  );
}

function CharacterSubInfo({ character, isAddToFavourite, onAddToFavourites }) {
  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <div className="character-detail__info">
        <h3 className="name">
          <span>{character.name}</span>
        </h3>
        <div className="info">
          <span
            className={`status ${character.status === "Dead" ? "red" : ""}`}
          ></span>
          <span> {character.status}</span>
          <span> - {character.species}</span>
        </div>
        <div className="location">
          <p>Last known location:</p>
          <p>{character.location.name}</p>
        </div>
        <div className="actions">
          {isAddToFavourite ? (
            <p>Already Added to Favourites</p>
          ) : (
            <button
              className="btn btn--primary"
              onClick={() => onAddToFavourites(character)}
            >
              Add to favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CharacterEpisodes({ episodes }) {
  const [sortBy,setSortBy] = useState(true);
  let sortedEpisodes;
  if(sortBy){
    sortedEpisodes = [...episodes].sort((a,b)=> new Date(a.created)-new Date(b.created));
  }else{
    sortedEpisodes = [...episodes].sort((a,b)=> new Date(b.created)-new Date(a.created));
  }
  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes:</h2>
        <button onClick={()=>setSortBy((is)=>!is)}>
          <ArrowUpCircleIcon className="icon" style={{rotate: sortBy ? "0deg" : "180deg"}}/>
        </button>
      </div>
      <ul>
        {episodes.map((episode, index) => (
          <li key={episode.id}>
            <div>
              {" "}
              {String(index + 1).padStart(2, "0")} - {episode.episode} :{" "}
              <strong>{episode.name}</strong>
            </div>
            <div className="badge badge--secondary">{episode.air_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
