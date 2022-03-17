import React, { useState } from "react";
import "./style.css"

const UpdateObject = () => {
  const bioData = {
    name: "malik",
    age: 24,
    degree: "BSE",
  };
  const [myObject, setMyObject] = useState(bioData);
  const updateObject=()=>{
      setMyObject({...myObject,name:"naveed Saleem"})
  }
// console.log(bioData);
  return (
    <>
    
          <div>
            <p className="paragraph" >
              
              My Name::{myObject.name} MyAge::{myObject.age} my Qualification::
              {myObject.degree}
            </p>
          </div>
        
    
      <button className="btn btn-primary" onClick={updateObject}> UpDate Object</button>
    </>
  );
};

export default UpdateObject;
