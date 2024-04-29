import { useEffect, useState } from "react";

export function useLocalStorage(){
    const [favourites, setFavourites] = useState(()=>JSON.parse(localStorage.getItem("FAVOURITES"))||[]);
    
  useEffect(()=>{
    localStorage.setItem("FAVOURITES",JSON.stringify(favourites))
  },[favourites]);
}