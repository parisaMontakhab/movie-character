import { EyeIcon} from '@heroicons/react/24/outline';
import { allCharacters } from "./data";

export default function CharacterList() {
  return (
    <div className="characters-list ">
      {allCharacters.map((item)=>
      <CharacterItem key={item.id} item={item}/>
    )}
    </div>
  )
}

function CharacterItem({item}){
    return(
        <div className="list__item">
            <img src={item.image} alt={item.name}/>
            <h3 className="name">{item.name}</h3>
            <div className="list-item__info info">
                <span className={`status ${item.status==="Dead" ? "red" : " "}`}></span>
                <span> {item.status}</span>
                <span> - {item.species}</span>

            </div>
            <button className="icon red">
              <EyeIcon/>
            </button>

        </div>
    )
}