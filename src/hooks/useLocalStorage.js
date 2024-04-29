import { useEffect, useState } from "react";

export function useLocalStorage(){
    const [value, setValue] = useState(()=>JSON.parse(localStorage.getItem("FAVOURITES"))||[]);
    
  useEffect(()=>{
    localStorage.setItem("FAVOURITES",JSON.stringify(value))
  },[value]);

  return[value,setValue];
}