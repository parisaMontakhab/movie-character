import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";

export default function CharacterList({
  characters,
  isLoading,
  onSelectedCharacter,
  selectedId,
}) {
  return (
    <div className="characters-list ">
      {isLoading ? (
        <Loader />
      ) : (
        characters.map((item) => (
          <CharacterItem
            key={item.id}
            item={item}
            
            
          >
            <button
              className="icon red"
              onClick={() => onSelectedCharacter(item.id)}
            >
              {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </CharacterItem>
        ))
      )}
    </div>
  );
}

export function CharacterItem({
  item,
  children,
}) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <h3 className="name">{item.name}</h3>
      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : " "}`}
        ></span>
        <span> {item.status}</span>
        <span> - {item.species}</span>
      </div>
      {children}
    </div>
  );
}
