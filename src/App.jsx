import { useState } from "react";
import PuppyList from "./components/PuppyList";
import "./App.css";
import PuppyDetails from "./components/PuppyDetails";

function App() {
  const [puppies, setPuppies] = useState([]);
  const [selectedPuppyID, setSelectedPuppyID] = useState(null);
  const [isPuppySelected, setIsPuppySelected] = useState(false);
  const [selectedPuppyData, setSelectedPuppyData] = useState(null);

  return (
    <>
      <p>Hello World</p>
      <PuppyList
        puppies={puppies}
        setPuppies={setPuppies}
        setSelectedPuppyID={setSelectedPuppyID}
      />
      <PuppyDetails
        selectedPuppyID={selectedPuppyID}
        selectedPuppyData={selectedPuppyData}
        setSelectedPuppyData={setSelectedPuppyData}
      />
    </>
  );
}

export default App;
