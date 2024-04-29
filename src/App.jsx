import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";

function App() {
 
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useState(()=>JSON.parse(localStorage.getItem("FAVOURITES"))||[]);


  useEffect(()=>{
    localStorage.setItem("FAVOURITES",JSON.stringify(favourites))
  },[favourites]);

  function handelSelectedCharacter(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  function handelToAddFavourites(char) {
    setFavourites((prevFav) => [...prevFav, char]);
  }
  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

  function handelRemoveFavourites(id){
   setFavourites((prevFav)=>prevFav.filter((fav)=>fav.id !== id));
  }

  return (
    <div className="app">
      <Toaster />
      <NavBar
        numOfResult={characters.length}
        query={query}
        setQuery={setQuery}
        favourites={favourites}
        onDeletFavourite={handelRemoveFavourites}
      />
      <div className="main">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          onSelectedCharacter={handelSelectedCharacter}
          selectedId={selectedId}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddToFavourites={handelToAddFavourites}
          isAddToFavourite={isAddToFavourite}
        />
      </div>
    </div>
  );
}

export default App;
