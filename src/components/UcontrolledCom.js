import React, { useRef, useState } from "react";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';


const UcontrolledCom = () => {
  const yourName = useRef(null);
  const [show, setShow] = useState(false);
  const handleSubmitt = (e) => {
    e.preventDefault();

    // alert("show")
    console.log(yourName.current.value);
    const name = yourName.current.value;
    name === "" ? alert("please fill the input") : setShow(true);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmitt}>
          <label htmlFor="myName"> your name is </label>
          <input type="text" id="myName" ref={yourName}></input>
          <button className="btn btn-success"><HighlightAltIcon/> click me</button>
        </form>

        <p> {show ? `your name is ${yourName.current.value}` : ""}</p>
      </div>
    </>
  );
};

export default UcontrolledCom;
