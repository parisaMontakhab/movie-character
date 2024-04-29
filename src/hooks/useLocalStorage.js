import { useEffect, useState } from "react";

export function useLocalStorage(key,intialState){
    const [value, setValue] = useState(()=>JSON.parse(localStorage.getItem(key))|| intialState);
    
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[value]);

  return[value,setValue]; 
  // write value instead favourites just for daynamicly " ke age jaye dg estefade kard harchizi bashe na inke favourites bashe"//
}