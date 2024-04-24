import {HeartIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import  Modal  from "./Modal";
export default function NavBar({numOfResult,query,setQuery,favourites}) {
  const[isOpen,setIsOpen] = useState(false);
  return (
   <nav className="navbar">
    <div className="navbar__logo ">LOGO</div>
    <input type="text" className="text-field" placeholder="search..." value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <div className="navbar__result">"found {numOfResult} characters"</div>
    <Modal onOpen={setIsOpen} open={isOpen} title="List of favourites"/>
    <button className="heart" onClick={()=>setIsOpen((is)=>!is)}>
        <HeartIcon className="icon"/>
        <span className="badge">{favourites.length}</span>
    </button>

   </nav>
  )
}
