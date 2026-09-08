import './App.css'

import game from "./game.json"
import List from './component/List/List'


function App() {


  return (
    <>
      <List games={game}/>
    </>
  )
}

export default App
