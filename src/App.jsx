import { allCharacters } from "./components/data";
import  { useEffect, useState } from 'react';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'

function App() {
  const[characters,setCharacters] = useState([]);

useEffect(()=>{
  fetch("https://rickandmortyapi.com/api/character").then((res)=>res.json()).then((data)=>setCharacters(data.results.slice(0,5)))
},[]);

  return (
    <div className='app'>
     <NavBar numOfResult ={characters.length}/>
     <div className='main'>
      <CharacterList characters={characters}/>
      <CharacterDetail/>

     </div>

    </div>
  )
}

export default App
