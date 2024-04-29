import { useEffect, useState } from "react";

export function useLocalStorage(key){
    const [value, setValue] = useState(()=>JSON.parse(localStorage.getItem(key))||[]);
    
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[value]);

  return[value,setValue]; 
  // write value instead favourites just for daynamicly " ke age jaye dg estefade kard harchizi bashe na inke favourites bashe"//
}