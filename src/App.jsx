import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import  { useEffect, useState } from 'react';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'

function App() {
  const[characters,setCharacters] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const[query,setQuery] = useState("");

useEffect(()=>{
  async function fetchinApi (){
    try{
      setIsLoading(true);
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`);
      
      setCharacters(data.results.slice(0,5));

    } catch(err){
      
       toast.error(err.response.data.error);
    } finally{
      setIsLoading(false);
    }
   
  };
  fetchinApi();
  
},[query]);

  return (
    <div className='app'>
      <Toaster/>
     <NavBar numOfResult ={characters.length} query={query} setQuery={setQuery}/>
     <div className='main'>
      <CharacterList characters={characters} isLoading={isLoading}/>
      <CharacterDetail/>

     </div>

    </div>
  )
}

export default App
