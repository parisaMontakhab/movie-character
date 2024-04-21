import { EyeIcon} from '@heroicons/react/24/outline';
import Loader from './Loader';



export default function CharacterList({characters,isLoading,onSelectedCharacter}) {
 
  return (
    <div className="characters-list ">
      { isLoading? (<Loader/>):
     ( characters.map((item)=>
      <CharacterItem key={item.id} item={item} onSelectedCharacter={onSelectedCharacter}/>
    ))}
    </div>
  )
}

function CharacterItem({item,onSelectedCharacter}){
    return(
        <div className="list__item">
            <img src={item.image} alt={item.name}/>
            <h3 className="name">{item.name}</h3>
            <div className="list-item__info info">
                <span className={`status ${item.status==="Dead" ? "red" : " "}`}></span>
                <span> {item.status}</span>
                <span> - {item.species}</span>

            </div>
            <button className="icon red" onClick={()=>onSelectedCharacter(item.id)}>
              <EyeIcon/>
            </button>

        </div>
    )
}