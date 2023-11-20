import { useEffect } from "react";

function PuppyDetails({ selectedPuppyID,selectedPuppyData,setSelectedPuppyData }) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/" +
          selectedPuppyID
      );
      const responseJSON = await response.json()
       setSelectedPuppyData(responseJSON.data.player) 
    };
    fetchData()
    
  }, [selectedPuppyID]);
    
 
  console.log(selectedPuppyData)
}

export default PuppyDetails;
