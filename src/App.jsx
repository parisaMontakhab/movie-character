import { allCharacters } from "./components/data";
import  { useState } from 'react';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'

function App() {
  const[characters,setCharacters] = useState(allCharacters);

  return (
    <div className='app'>
     <NavBar/>
     <div className='main'>
      <CharacterList characters={characters}/>
      <CharacterDetail/>

     </div>

    </div>
  )
}

export default App
