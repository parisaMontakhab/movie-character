import {HeartIcon} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavBar({numOfResult,query,setQuery,favourites}) {
  const[isOpen,setIsOpen] = useState(false);
  return (
   <nav className="navbar">
    <div className="navbar__logo ">LOGO</div>
    <input type="text" className="text-field" placeholder="search..." value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <div className="navbar__result">"found {numOfResult} characters"</div>
    <button className="heart" onClick={()}>
       
        <HeartIcon className="icon"/>
        <span className="badge">{favourites.length}</span>
    </button>

   </nav>
  )
}
