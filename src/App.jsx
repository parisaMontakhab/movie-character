
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className='app'>
     <NavBar/>
     <div className='main'>
      <CharacterList />
      <CharacterDetail/>

     </div>

    </div>
  )
}

export default App
