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
  const[selectedId,setSelectedId] = useState(null);
  const[favourites,setFavourites] = useState([]);

useEffect(()=>{

  async function fetchinApi (){
    const controller = new AbortController();
    const signal = controller.signal;
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
  if(query.length <3 ){
    setCharacters([]);
    return;
  }
  fetchinApi();
   return ()=>{
    controller.abort();
   }
  
},[query]);

function handelSelectedCharacter(id){
  setSelectedId(prevId => prevId===id ? null : id);
}

function handelToAddFavourites(char){
setFavourites((prevFav)=>[...prevFav,char]);
}
const isAddToFavourite = favourites.map((fav)=>fav.id).includes(selectedId);

  return (
    <div className='app'>
      <Toaster/>
     <NavBar numOfResult ={characters.length} query={query} setQuery={setQuery} numOfFavourites={favourites.length}/>
     <div className='main'>
      <CharacterList characters={characters} isLoading={isLoading} onSelectedCharacter={handelSelectedCharacter} selectedId={selectedId}/>
      <CharacterDetail selectedId={selectedId} onAddToFavourites={handelToAddFavourites} isAddToFavourite={isAddToFavourite}/>

     </div>

    </div>
  )
}

export default App
