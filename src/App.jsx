import './App.css'

import { GlobalStyle } from './GlobalStyle'
import data from "./data.json"
import List from './component/List/List'
import Section from './component/Section/Section'
import Title from './component/Title/Title'


function App() {


  return (
    
    <>
    <GlobalStyle />
     <Section>
      <Title text="24th core Worlds Coalition Conferenc"/>
    <List data={data}/>
     </Section>
    </>

  )
}

export default App
