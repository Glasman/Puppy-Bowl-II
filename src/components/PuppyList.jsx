import { useState, useEffect } from "react";

function PuppyList({ puppies, setPuppies, setSelectedPuppyID }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players"
        );
        const responseJSON = await response.json();
        const puppyData = responseJSON.data.players;
        setPuppies(puppyData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log({ puppies });
  
  return (
    <>
      <h1>The Players</h1>

      {puppies.map((pupper) => (
        <div key={pupper.id} onClick={() => {
          setSelectedPuppyID(pupper.id)
          
        }}>
          <p>Name: {pupper.name}</p>
          <img src={pupper.imageUrl} />
        </div>
      ))}
    </>
  );
}

export default PuppyList;
