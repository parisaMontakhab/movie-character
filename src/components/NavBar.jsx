import {HeartIcon} from "@heroicons/react/24/outline";

export default function NavBar({numOfResult,query,setQuery,favourites}) {
  return (
   <nav className="navbar">
    <div className="navbar__logo ">LOGO</div>
    <input type="text" className="text-field" placeholder="search..." value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <div className="navbar__result">"found {numOfResult} characters"</div>
    <button className="heart">
        <HeartIcon className="icon"/>
        <span className="badge">{favourites.length}</span>
    </button>

   </nav>
  )
}
