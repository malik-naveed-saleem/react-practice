import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';




const UseReducerHook = () => {
    const [count,setCount]=useState(0)
//     const [incNo, setIncNo]=useState(0)
// const [decNo, setDecNo]=useState(0)
    const handleInc=()=>{
        setCount(count+1)


    }
    const handleDec=()=>{
        setCount(count-1)


    }
  return (
    <>
      <div className="container reducer_container">
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={handleInc}>Increment <AddBoxIcon/></button>
        <button className="btn btn-warning"  onClick={handleDec}>Decrement <RemoveCircleOutlineIcon/>  </button>
      </div>
    </>
  );
};

export default UseReducerHook;
