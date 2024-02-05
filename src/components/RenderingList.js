import React from "react";
import { people } from "../utils/data";

const RenderingList = () => {
    const Cup =({guest})=> {
        // Bad: changing a preexisting variable
        console.log(guest,"Helloooo")
        return <h2>Tea cup for guest #{guest}</h2>;
      }
  return (
    <div>
      {/* <h1>Scientist</h1>
      {people.map((person) => (
        <div key={person.id}>
          <h1>{person.name}</h1>
          <p>Profession: {person.profession}</p>
          <p>Accomplishment: {person.accomplishment}</p>
        </div>
      ))} */}

      <Cup guest={1}/>
      <Cup guest={100}/>
    </div>
  );
};

export default RenderingList;
