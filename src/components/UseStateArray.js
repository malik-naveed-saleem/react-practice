import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 1,
      name: "Bilal",
      age: 24,
    },
    {
      id: 2,
      name: "malik",
      age: 24,
    },
    {
      id: 3,
      name: "Naveed",
      age: 24,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);

  const handleClear = () => {
    setMyArray([]);
  };
  const removeElement=(id)=>{
    const newArray=myArray.filter((val,index)=>{
      return index !== id;
    })
    setMyArray(newArray)

  }
  console.log(bioData);
  return (
    <>
    <div className="container   containe_class">

      {myArray.map((currVal, index) => (
        <div key={index} className="mainDiv_array">
          <div>
            <p className="paragraph">
              my id is <strong>{currVal.id}</strong> name
              <strong>{currVal.name}</strong> and my age is
              <strong>{currVal.age}</strong>
            </p>
          </div>
          <div>
            <button className="btn-danger  arrayButton" onClick={()=>{removeElement(index)}}>Delete</button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleClear}>
        clear All
      </button>
          </div>
    </>
  );
};

export default UseStateArray;
