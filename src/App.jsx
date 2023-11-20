import { useState } from 'react'
import PuppyList from './components/PuppyList'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState([]);
  const [selectedPuppyID, setSelectedPuppyID] = useState(null)
  
  return (
    <>
      <p>Hello World</p>
      <PuppyList puppies={puppies} setPuppies={setPuppies} setSelectedPuppyID={setSelectedPuppyID}/>
    </>
  )
}

export default App
 