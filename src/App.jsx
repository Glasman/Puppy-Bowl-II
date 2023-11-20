import { useState } from 'react'
import PuppyList from './components/PuppyList'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState([]);
  
  return (
    <>
      <p>Hello World</p>
      <PuppyList puppies={puppies} setPuppies={setPuppies}/>
    </>
  )
}

export default App
 