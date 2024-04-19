import toast, { Toaster } from 'react-hot-toast';
import  { useEffect, useState } from 'react';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'

function App() {
  const[characters,setCharacters] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
useEffect(()=>{
  async function fetchinApi (){
    setIsLoading(true);
   const res = await fetch("https://rickandmortyapi.com/api/character");
   const data = await res.json();
   setCharacters(data.results.slice(0,5));
   setIsLoading(false);
  };
  fetchinApi();
  
},[]);

  return (
    <div className='app'>
      <Toaster/>
     <NavBar numOfResult ={characters.length}/>
     <div className='main'>
      <CharacterList characters={characters} isLoading={isLoading}/>
      <CharacterDetail/>

     </div>

    </div>
  )
}

export default App
