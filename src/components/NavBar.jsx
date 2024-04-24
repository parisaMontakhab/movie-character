import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { CharacterItem } from "./CharacterList";

export default function NavBar({ numOfResult, query, setQuery, favourites }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo ">LOGO</div>
      <input
        type="text"
        className="text-field"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="navbar__result">"found {numOfResult} characters"</div>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of favourites">
        {favourites.map((item) => (
          <CharacterItem
          key={item.id}
            item={item}
           
          >
            <button className=" icon red">
              <TrashIcon/>
            </button>
          </CharacterItem>
        ))}
      </Modal>
      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </nav>
  );
}
